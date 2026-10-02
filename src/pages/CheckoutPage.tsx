import React, { useState, useMemo } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { courseService } from "../services/courseService"
import { paymentService } from "../services/paymentService"
import { useAuth } from "../context/AuthContext"
import { Icon } from "../components/Icons"

export function CheckoutPage() {
  const { courseId } = useParams<{ courseId: string }>()
  const navigate = useNavigate()
  const { user, enrollInCourse } = useAuth()

  const course = useMemo(() => {
    if (!courseId) return undefined
    return courseService.getCourseBySlug(courseId)
  }, [courseId])

  const [couponInput, setCouponInput] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<string | undefined>(
    undefined,
  )
  const [couponMessage, setCouponMessage] = useState<string | null>(null)

  // Student form info
  const [fullName, setFullName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [phone, setPhone] = useState("+91 98765 43210")
  const [paymentMethod, setPaymentMethod] =
    useState<"upi" | "card" | "netbanking">("upi")

  // Payment execution state
  const [paymentState, setPaymentState] =
    useState<"idle" | "processing" | "success" | "error">("idle")
  const [txDetails, setTxDetails] = useState<{
    id: string
    message: string
  } | null>(null)

  const breakdown = useMemo(() => {
    if (!course) return null
    return paymentService.calculateBreakdown(course, appliedCoupon)
  }, [course, appliedCoupon])

  if (!course) {
    return (
      <main
        style={{ paddingTop: "140px", minHeight: "80vh", textAlign: "center" }}
      >
        <div className="container">
          <h2>Course Not Found</h2>
          <p style={{ color: "var(--muted)", margin: "14px 0 20px" }}>
            The course you are attempting to purchase does not exist.
          </p>
          <Link to="/courses" className="button button-primary">
            <span>Return to Courses</span>
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </main>
    )
  }

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    const clean = couponInput.trim().toUpperCase()
    if (clean === "SHIELD20" || clean === "EARLYBIRD" || clean === "SKILL500") {
      setAppliedCoupon(clean)
      setCouponMessage(`Coupon "${clean}" successfully applied!`)
    } else {
      setCouponMessage("Invalid coupon code. Try SHIELD20 for 20% off.")
    }
  }

  const handleProceedPayment = async () => {
    if (!fullName || !email) {
      alert("Please provide student name and email.")
      return
    }

    setPaymentState("processing")

    try {
      const res = await paymentService.processDemoPayment(
        course.id,
        fullName,
        email,
        breakdown!,
      )

      if (res.success) {
        setTxDetails({ id: res.transactionId, message: res.message })
        setPaymentState("success")

        // Record course enrollment in context / user profile
        enrollInCourse(course.id)

        // Redirect after brief delay
        setTimeout(() => {
          navigate("/my-courses")
        }, 2200)
      }
    } catch {
      setPaymentState("error")
    }
  }

  return (
    <main
      style={{
        paddingTop: "110px",
        backgroundColor: "var(--canvas)",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      <div className="container" style={{ maxWidth: "1050px" }}>
        {/* Demo Mode Notice */}
        <div
          style={{
            backgroundColor: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: "14px",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
            color: "#92400e",
            fontSize: "13px",
          }}
        >
          <Icon name="spark" size={18} />
          <div>
            <b>Demonstration Payment Gateway Mode:</b> This sandbox environment
            simulates payment authorization and enrollment without processing
            real financial charges.
          </div>
        </div>

        <h1
          style={{
            fontSize: "30px",
            fontWeight: 800,
            margin: "0 0 28px",
            color: "var(--ink)",
            letterSpacing: "-0.03em",
          }}
        >
          Checkout & Enrollment
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.9fr",
            gap: "35px",
          }}
        >
          {/* Left Column: Student Details & Payment Method */}
          <div style={{ display: "grid", gap: "24px" }}>
            {/* Student Info Card */}
            <div
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid var(--line)",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  margin: "0 0 18px",
                  color: "var(--ink)",
                }}
              >
                1. Student Information
              </h2>
              <div style={{ display: "grid", gap: "14px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--muted)",
                      marginBottom: "4px",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter full legal name for certificate"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid var(--line)",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--muted)",
                        marginBottom: "4px",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid var(--line)",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--muted)",
                        marginBottom: "4px",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid var(--line)",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid var(--line)",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  margin: "0 0 16px",
                  color: "var(--ink)",
                }}
              >
                2. Select Payment Method
              </h2>

              <div style={{ display: "grid", gap: "10px" }}>
                {[
                  {
                    id: "upi",
                    label: "UPI Instant Transfer (GPay / PhonePe / Paytm / QR)",
                    icon: "spark",
                  },
                  {
                    id: "card",
                    label: "Credit / Debit Card (Visa, Mastercard, RuPay)",
                    icon: "shield",
                  },
                  {
                    id: "netbanking",
                    label: "Net Banking (All major Indian banks)",
                    icon: "book",
                  },
                ].map((m) => (
                  <label
                    key={m.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 18px",
                      borderRadius: "12px",
                      border:
                        paymentMethod === m.id
                          ? "2px solid var(--blue)"
                          : "1px solid var(--line)",
                      backgroundColor:
                        paymentMethod === m.id ? "#f0f7f5" : "var(--white)",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value={m.id}
                      checked={paymentMethod === m.id}
                      onChange={() => setPaymentMethod(m.id as any)}
                    />
                    <Icon name={m.icon as any} size={16} />
                    <span>{m.label}</span>
                  </label>
                ))}
              </div>

              {/* Payment Processing overlay / dialog */}
              {paymentState === "processing" && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: "#f0f7f5",
                    borderRadius: "14px",
                    textAlign: "center",
                    border: "1px solid var(--blue)",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: "var(--navy)",
                      fontSize: "15px",
                      marginBottom: "6px",
                    }}
                  >
                    Processing Demo Payment...
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                    Verifying mock authorization with sandbox gateway...
                  </div>
                </div>
              )}

              {paymentState === "success" && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: "#ecfdf5",
                    borderRadius: "14px",
                    textAlign: "center",
                    border: "1px solid #10b981",
                  }}
                >
                  <div
                    style={{
                      color: "#047857",
                      fontWeight: 800,
                      fontSize: "16px",
                      marginBottom: "4px",
                    }}
                  >
                    ✓ Payment Successful!
                  </div>
                  <div style={{ fontSize: "12px", color: "#065f46" }}>
                    {txDetails?.message}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#047857",
                      marginTop: "8px",
                    }}
                  >
                    Redirecting to your course learning dashboard...
                  </div>
                </div>
              )}

              {paymentState === "idle" && (
                <button
                  type="button"
                  onClick={handleProceedPayment}
                  className="button button-primary"
                  style={{
                    width: "100%",
                    marginTop: "24px",
                    minHeight: "48px",
                  }}
                >
                  <span>
                    Pay ₹{breakdown?.totalAmount.toLocaleString("en-IN")}
                  </span>
                  <Icon name="arrow" size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary & Coupon */}
          <div>
            <div
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid var(--line)",
                position: "sticky",
                top: "120px",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  margin: "0 0 16px",
                  color: "var(--ink)",
                }}
              >
                Order Summary
              </h2>

              {/* Course brief */}
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  paddingBottom: "16px",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: "70px",
                    height: "60px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "var(--ink)",
                      lineHeight: "1.3",
                    }}
                  >
                    {course.title}
                  </h3>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                    {course.duration} • {course.level}
                  </span>
                </div>
              </div>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} style={{ marginTop: "16px" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Coupon code (e.g. SHIELD20)"
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid var(--line)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                    }}
                  />
                  <button
                    type="submit"
                    className="button button-secondary"
                    style={{
                      minHeight: "36px",
                      padding: "0 14px",
                      fontSize: "12px",
                    }}
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && (
                  <div
                    style={{
                      fontSize: "11px",
                      marginTop: "6px",
                      color: appliedCoupon ? "#15803d" : "#b91c1c",
                      fontWeight: 600,
                    }}
                  >
                    {couponMessage}
                  </div>
                )}
                <div
                  style={{
                    fontSize: "10px",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  Try promo code:{" "}
                  <b style={{ color: "var(--blue)" }}>SHIELD20</b> for 20% off
                </div>
              </form>

              {/* Price Calculation breakdown */}
              {breakdown && (
                <div
                  style={{
                    marginTop: "20px",
                    display: "grid",
                    gap: "10px",
                    fontSize: "13px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "var(--muted)",
                    }}
                  >
                    <span>Course Tuition</span>
                    <span>
                      ₹{breakdown.coursePrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {breakdown.couponDiscount > 0 && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#15803d",
                        fontWeight: 700,
                      }}
                    >
                      <span>Discount ({breakdown.discountCodeApplied})</span>
                      <span>
                        -₹{breakdown.couponDiscount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "var(--muted)",
                    }}
                  >
                    <span>GST (18%)</span>
                    <span>₹{breakdown.taxGst.toLocaleString("en-IN")}</span>
                  </div>

                  <hr
                    style={{
                      border: "none",
                      borderTop: "1px solid var(--line)",
                      margin: "4px 0",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "var(--ink)",
                    }}
                  >
                    <span>Total Payable</span>
                    <span style={{ color: "var(--navy)" }}>
                      ₹{breakdown.totalAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default CheckoutPage
