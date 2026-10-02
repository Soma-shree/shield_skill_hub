import { Course } from "../types"

export interface CheckoutBreakdown {
  coursePrice: number
  couponDiscount: number
  discountCodeApplied: string | null
  taxGst: number
  totalAmount: number
}

const VALID_COUPONS: Record<string, number> = {
  SHIELD20: 0.2, // 20% discount
  EARLYBIRD: 0.15, // 15% discount
  SKILL500: 500, // Flat ₹500 off
}

export const paymentService = {
  /**
   * Calculates the pricing breakdown including optional discount coupons and GST.
   */
  calculateBreakdown(course: Course, couponCode?: string): CheckoutBreakdown {
    const coursePrice = course.price
    let couponDiscount = 0
    let discountCodeApplied: string | null = null

    if (couponCode) {
      const cleanCode = couponCode.trim().toUpperCase()
      if (VALID_COUPONS[cleanCode] !== undefined) {
        discountCodeApplied = cleanCode
        const rule = VALID_COUPONS[cleanCode]
        if (rule < 1) {
          couponDiscount = Math.round(coursePrice * rule)
        } else {
          couponDiscount = Math.min(coursePrice, rule)
        }
      }
    }

    const discountedBase = Math.max(0, coursePrice - couponDiscount)
    // Standard 18% educational tech services GST
    const taxGst = Math.round(discountedBase * 0.18)
    const totalAmount = discountedBase + taxGst

    return {
      coursePrice,
      couponDiscount,
      discountCodeApplied,
      taxGst,
      totalAmount,
    }
  },

  /**
   * Simulates a demo payment processing lifecycle without real financial transactions.
   *
   * REAL PAYMENT GATEWAY INTEGRATION (Razorpay / Stripe) POINT:
   * In production, this method should invoke your backend API to create an order:
   *
   * 1. Backend:
   *    const order = await razorpay.orders.create({ amount: totalInPaise, currency: "INR" });
   *
   * 2. Frontend:
   *    const options = {
   *      key: "YOUR_RAZORPAY_KEY_ID",
   *      amount: order.amount,
   *      order_id: order.id,
   *      handler: function (response) {
   *        // verify payment signature on backend
   *      }
   *    };
   *    const rzp = new window.Razorpay(options);
   *    rzp.open();
   *
   * IMPORTANT SECURITY NOTICE:
   * This frontend demo never collects or stores CVV, card numbers, or banking credentials.
   */
  async processDemoPayment(
    courseId: string,
    studentName: string,
    studentEmail: string,
    breakdown: CheckoutBreakdown,
  ): Promise<{ success: boolean transactionId: string message: string }> {
    // Simulate real gateway handshake latency
    await new Promise((resolve) => setTimeout(resolve, 1600))

    const mockTxId = `TXN-SHIELD-${Date.now().toString().slice(-6)}-DEMO`

    return {
      success: true,
      transactionId: mockTxId,
      message: `Demo transaction ${mockTxId} approved for ₹${breakdown.totalAmount.toLocaleString("en-IN")}.`,
    }
  },
}
