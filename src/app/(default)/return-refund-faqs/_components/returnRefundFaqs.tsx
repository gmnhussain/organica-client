import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Return Policy Section */}
          <Card id="1" className="px-8 py-10 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-primary">📦</span>
                Return Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Return Window</h3>
                <p className="text-muted-foreground">
                  You have 30 days from the date of delivery to return your item
                  for a full refund or exchange.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Eligible Items</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>All clothing and accessories purchased at full price</li>
                  <li>Electronics in original packaging with all components</li>
                  <li>Home goods and furniture (subject to inspection)</li>
                  <li>Books, media, and educational materials</li>
                  <li>Beauty products that are unopened and sealed</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Condition Requirements
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Items must be in original condition and packaging</li>
                  <li>All tags and labels must be attached</li>
                  <li>Items should be unworn and unused</li>
                  <li>Include all original accessories and documentation</li>
                  <li>No signs of wear, stains, or damage</li>
                  <li>Original receipt or proof of purchase required</li>
                  <li>Items must not have been altered or modified</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Non-Returnable Items
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Intimate apparel and swimwear for hygiene reasons</li>
                  <li>Personalized or custom-made products</li>
                  <li>Perishable goods and food items</li>
                  <li>Digital downloads and software licenses</li>
                  <li>Gift cards and store credit</li>
                  <li>Final sale or clearance items</li>
                  <li>Items damaged by misuse or normal wear</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Return Process</h3>
                <p className="text-muted-foreground mb-2">
                  Contact our customer service team to initiate a return. We'll
                  provide you with a prepaid return label and instructions.
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Contact customer service within 30 days of delivery</li>
                  <li>Provide your order number and reason for return</li>
                  <li>
                    Receive return authorization and prepaid shipping label
                  </li>
                  <li>Package items securely in original packaging</li>
                  <li>
                    Attach return label and drop off at designated carrier
                  </li>
                  <li>Track your return using the provided tracking number</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Return Shipping</h3>
                <p className="text-muted-foreground">
                  We provide free return shipping for defective items or our
                  errors. For other returns, a $5.99 return shipping fee will be
                  deducted from your refund. International returns may incur
                  additional fees.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Refund Policy Section */}
          <Card id="2" className="px-8 py-10 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-primary">💳</span>
                Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Processing Time</h3>
                <p className="text-muted-foreground mb-2">
                  Refunds are processed within 5-7 business days after we
                  receive your returned item.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Item inspection: 1-2 business days upon receipt</li>
                  <li>Refund approval and processing: 2-3 business days</li>
                  <li>Bank/credit card processing: 3-5 business days</li>
                  <li>PayPal refunds: 1-2 business days</li>
                  <li>Store credit: Immediate upon approval</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Refund Method</h3>
                <p className="text-muted-foreground mb-2">
                  Refunds will be issued to the original payment method used for
                  the purchase.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Credit/Debit cards: Refunded to the original card</li>
                  <li>PayPal: Refunded to your PayPal account</li>
                  <li>Gift cards: Refunded as store credit</li>
                  <li>
                    Buy-now-pay-later: Refunded according to provider terms
                  </li>
                  <li>Cash purchases: Refunded as store credit or check</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Partial Refunds</h3>
                <p className="text-muted-foreground mb-2">
                  The following situations may result in partial refunds:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    Items returned after 30 days (50% refund within 60 days)
                  </li>
                  <li>
                    Items with signs of wear or damage (assessed case by case)
                  </li>
                  <li>
                    Items missing original packaging or accessories (up to 25%
                    deduction)
                  </li>
                  <li>
                    Electronics without original cables or manuals (10-20%
                    deduction)
                  </li>
                  <li>Books with writing, highlighting, or bent pages</li>
                  <li>Clothing with removed tags or altered condition</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Non-Refundable Items
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Personalized or custom-made items</li>
                  <li>Digital downloads and software</li>
                  <li>Gift cards and promotional items</li>
                  <li>Opened beauty products and cosmetics</li>
                  <li>Undergarments and intimate apparel</li>
                  <li>Perishable goods and consumables</li>
                  <li>
                    Items purchased with promotional discounts over 50% off
                  </li>
                  <li>Services and installation fees</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Refund Exceptions
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    Defective items: Full refund plus return shipping
                    reimbursement
                  </li>
                  <li>
                    Wrong item sent: Full refund and expedited replacement
                  </li>
                  <li>
                    Damaged in shipping: Full refund and insurance claim
                    processing
                  </li>
                  <li>
                    Late delivery (over 10 days): Partial refund or full refund
                    option
                  </li>
                  <li>
                    Price drops within 7 days: Price adjustment refund available
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Tracking Your Refund
                </h3>
                <p className="text-muted-foreground">
                  You'll receive email notifications at each stage of the refund
                  process. You can also check your refund status by logging into
                  your account or contacting customer service with your order
                  number.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQs Section */}
          <Card id="3" className="px-8 py-10 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="text-primary">❓</span>
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer">
                    How do I track my order?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can track your order by logging into your account and
                    viewing your order history. You'll also receive a tracking
                    number via email once your order ships.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer">
                    What shipping options are available?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer standard shipping (5-7 business days), expedited
                    shipping (2-3 business days), and overnight shipping.
                    Shipping costs vary based on your location and chosen
                    method.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer">
                    Can I exchange an item instead of returning it?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! You can exchange items for a different size, color, or
                    style within 30 days of purchase. The exchange process is
                    similar to returns - just specify your preferred replacement
                    when contacting customer service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="cursor-pointer">
                    Do you offer international shipping?
                  </AccordionTrigger>
                  <AccordionContent>
                    Currently, we ship to the United States, Canada, and select
                    European countries. International shipping times and costs
                    vary by destination. Additional customs fees may apply.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="cursor-pointer">
                    How can I contact customer support?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reach our customer support team via email at
                    support@company.com, phone at 1-800-123-4567, or through our
                    live chat feature available 24/7 on our website.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="cursor-pointer">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, MasterCard, American
                    Express), PayPal, Apple Pay, Google Pay, and
                    buy-now-pay-later options like Klarna and Afterpay.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
