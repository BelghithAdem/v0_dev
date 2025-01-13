export interface CustomerInsights {
  totalOrders: number
  averageOrderValue: number
  outstandingPayments: number
  lastOrderDate?: Date
  preferredShippingMethod?: string
  preferredPaymentMethod?: string
  preferredWarehouse?: string
  isPreferredCustomer: boolean
  creditUtilization: number
}

export interface CustomerPreferences {
  defaultShippingAddress: Address
  defaultBillingAddress: Address
  defaultPaymentTerms: string
  defaultShippingMethod: string
  defaultPaymentMethod: string
  taxExempt: boolean
  taxExemptionNumber?: string
  specialPricing: boolean
  notes: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  billingAddress: Address
  shippingAddress: Address
  taxId?: string
  creditLimit?: number
  paymentTerms?: string
  isGuest?: boolean
  insights?: CustomerInsights
  preferences?: CustomerPreferences
}

export interface Address {
  street: string
  city: string
  state: string
  country: string
  postalCode: string
}

export interface Product {
  id: string
  name: string
  code: string
  description: string
  unitPrice: number
  taxRate: number
  inStock: number
  category: string
}

export interface OrderLine {
  id: number
  tax_rate: number
  product_price: number
  qty: number
  discount: number
  product_name: string
  product_type: string
  unit_id: any; // Replace `any` with the actual type for `unit_id` if available
  product_id: {
    name: string
    code: string | null
    price: number
  }
}

export interface SalesOrder {
  id: string
  orderNumber: string
  customerId: string
  status: 'draft' | 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  orderDate: Date
  deliveryDate?: Date
  dueDate?: Date
  paymentTerms: string
  currency: string
  subtotal: number
  taxTotal: number
  discountTotal: number
  shippingCost: number
  total: number
  notes?: string
  customerNotes?: string
  internalNotes?: string
  attachments?: File[]
  orderLines: OrderLine[]
  shippingMethod?: string
  trackingNumber?: string
  vendorRefNo?: string
  contactPerson?: string
  paymentMethod: string
  isPaid: boolean
}

export interface Warehouse {
  id: string
  name: string
  address: Address
}

export interface ShippingMethod {
  id: string
  name: string
  cost: number
  estimatedDeliveryDays: number
}

export interface PaymentMethod {
  id: string
  name: string
}

