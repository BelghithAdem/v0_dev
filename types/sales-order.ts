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
  brand: string | null;
  cat2: string;
  code: string;
  company_name: string | null;
  company_other_1: string | null;
  country: string | null;
  date_created: string;
  date_updated: string | null;
  description: string;
  description_zh_HANT: string | null;
  detail: string | null;
  detail_zh_HANT: string | null;
  end_date: string | null;
  id: number;
  is_generate_fixed_day: boolean;
  is_multi_unit: boolean;
  membership_start_day: string | null;
  name: string;
  name_en_US: string | null;
  name_zh_HANT: string | null;
  parent_id: number | null;
  period: string | null;
  period_zh_HANT: string | null;
  price: number;
  price_discount: number | null;
  raw: string | null;
  recurring: string | null;
  remark: string | null;
  slug: string | null;
  sort: number | null;
  start_date: string | null;
  status: string;
  storage: string | null;
  type: string;
  weight: string | null;
  x_days_before_eligibility_end_date: number;
  duration: string | null;
  user_created: string;
  user_updated: string | null;
  image: string | null;
  orq: number;
  category: number[];
  inventory: any[];
  children: any[];
  product_option: any[];
  product_variant: any[];
  companies: number[];
  unit: string | null;
  units: any[];
  image_url: string | null;
}
export interface OrderLine {
  id: string;
  product_id: number | null;
  product_name: string;
  product_price: number;
  product_type: string;
  qty: number;
  discount: number;
  tax_rate: number;
  unit_id: number | null;
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









