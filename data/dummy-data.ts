import { Customer, Product, Warehouse, ShippingMethod, PaymentMethod, OrderLine, SalesOrder } from '@/types/sales-order'

const customers: Customer[] = [
  {
    id: "1",
    name: "Acme Corp",
    email: "contact@acme.com",
    phone: "123-456-7890",
    billingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      postalCode: "10001"
    },
    shippingAddress: {
      street: "456 Warehouse Ave",
      city: "New Jersey",
      state: "NJ",
      country: "USA",
      postalCode: "07001"
    },
    taxId: "12-3456789",
    creditLimit: 50000,
    paymentTerms: "Net 30",
    insights: {
      totalOrders: 47,
      averageOrderValue: 3250,
      outstandingPayments: 12500,
      lastOrderDate: new Date("2024-01-10"),
      preferredShippingMethod: "2",
      preferredPaymentMethod: "1",
      preferredWarehouse: "1",
      isPreferredCustomer: true,
      creditUtilization: 75
    },
    preferences: {
      defaultShippingAddress: {
        street: "456 Warehouse Ave",
        city: "New Jersey",
        state: "NJ",
        country: "USA",
        postalCode: "07001"
      },
      defaultBillingAddress: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",
        postalCode: "10001"
      },
      defaultPaymentTerms: "net30",
      defaultShippingMethod: "2",
      defaultPaymentMethod: "1",
      taxExempt: true,
      taxExemptionNumber: "TE-12345",
      specialPricing: true,
      notes: "VIP customer - handle with priority"
    }
  },
  {
    id: "2",
    name: "TechStart Inc",
    email: "info@techstart.com",
    phone: "987-654-3210",
    billingAddress: {
      street: "789 Innovation Blvd",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      postalCode: "94105"
    },
    shippingAddress: {
      street: "789 Innovation Blvd",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      postalCode: "94105"
    },
    taxId: "98-7654321",
    creditLimit: 100000,
    paymentTerms: "Net 60",
    insights: {
      totalOrders: 12,
      averageOrderValue: 5750,
      outstandingPayments: 0,
      lastOrderDate: new Date("2024-01-05"),
      preferredShippingMethod: "3",
      preferredPaymentMethod: "2",
      preferredWarehouse: "2",
      isPreferredCustomer: false,
      creditUtilization: 25
    },
    preferences: {
      defaultShippingAddress: {
        street: "789 Innovation Blvd",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        postalCode: "94105"
      },
      defaultBillingAddress: {
        street: "789 Innovation Blvd",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        postalCode: "94105"
      },
      defaultPaymentTerms: "net60",
      defaultShippingMethod: "3",
      defaultPaymentMethod: "2",
      taxExempt: false,
      specialPricing: false,
      notes: "New tech startup - growing account"
    }
  }
]

const products: Product[] = [
  {
    id: "1",
    name: "Premium Laptop",
    code: "TECH-001",
    description: "High-performance laptop for professionals",
    unitPrice: 1299.99,
    taxRate: 8.5,
    inStock: 50,
    category: "Electronics"
  },
  {
    id: "2",
    name: "Wireless Mouse",
    code: "ACC-001",
    description: "Ergonomic wireless mouse",
    unitPrice: 29.99,
    taxRate: 8.5,
    inStock: 200,
    category: "Accessories"
  },
  {
    id: "3",
    name: "4K Monitor",
    code: "DISP-001",
    description: "Ultra-sharp 4K display",
    unitPrice: 399.99,
    taxRate: 8.5,
    inStock: 30,
    category: "Electronics"
  }
]

const warehouses: Warehouse[] = [
  {
    id: "1",
    name: "Main Warehouse",
    address: {
      street: "100 Storage Lane",
      city: "Chicago",
      state: "IL",
      country: "USA",
      postalCode: "60601"
    }
  },
  {
    id: "2",
    name: "West Coast Fulfillment Center",
    address: {
      street: "200 Dock Road",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      postalCode: "90001"
    }
  }
]

const shippingMethods: ShippingMethod[] = [
  {
    id: "1",
    name: "Standard Shipping",
    cost: 9.99,
    estimatedDeliveryDays: 5
  },
  {
    id: "2",
    name: "Express Shipping",
    cost: 19.99,
    estimatedDeliveryDays: 2
  },
  {
    id: "3",
    name: "Overnight Shipping",
    cost: 29.99,
    estimatedDeliveryDays: 1
  }
]

const paymentMethods: PaymentMethod[] = [
  { id: "1", name: "Credit Card" },
  { id: "2", name: "Bank Transfer" },
  { id: "3", name: "Cash on Delivery" },
  { id: "4", name: "PayPal" }
]

const initialOrderLines: OrderLine[] = [
  {
    id: "1",
    productId: "1",
    productName: "Premium Laptop",
    productCode: "TECH-001",
    quantity: 2,
    unitPrice: 1299.99,
    taxRate: 8.5,
    discount: 5,
    subTotal: 2599.98,
    total: 2681.98,
    notes: "Bulk order discount applied",
    unit: "piece",
    warehouse: "1",
    isCustom: false
  },
  {
    id: "2",
    productId: "2",
    productName: "Wireless Mouse",
    productCode: "ACC-001",
    quantity: 5,
    unitPrice: 29.99,
    taxRate: 8.5,
    discount: 0,
    subTotal: 149.95,
    total: 162.70,
    unit: "piece",
    warehouse: "1",
    isCustom: false
  }
]

const sampleSalesOrders: SalesOrder[] = [
  {
    id: "1",
    orderNumber: "SO-2024-001",
    customerId: "1", // Acme Corp
    status: "delivered",
    orderDate: new Date("2024-01-02"),
    deliveryDate: new Date("2024-01-07"),
    dueDate: new Date("2024-02-01"),
    paymentTerms: "net30",
    currency: "USD",
    subtotal: 2749.93,
    taxTotal: 233.74,
    discountTotal: 137.50,
    shippingCost: 19.99,
    total: 2866.16,
    notes: "Priority delivery requested",
    customerNotes: "Please deliver to loading dock B",
    internalNotes: "VIP customer - handle with care",
    orderLines: [
      {
        id: "1",
        productId: "1",
        productName: "Premium Laptop",
        productCode: "TECH-001",
        quantity: 2,
        unitPrice: 1299.99,
        taxRate: 8.5,
        discount: 5,
        subTotal: 2599.98,
        total: 2681.98,
        unit: "piece",
        warehouse: "1",
        isCustom: false
      },
      {
        id: "2",
        productId: "2",
        productName: "Wireless Mouse",
        productCode: "ACC-001",
        quantity: 5,
        unitPrice: 29.99,
        taxRate: 8.5,
        discount: 0,
        subTotal: 149.95,
        total: 162.70,
        unit: "piece",
        warehouse: "1",
        isCustom: false
      }
    ],
    shippingMethod: "2", // Express Shipping
    trackingNumber: "EXP123456789",
    paymentMethod: "1", // Credit Card
    isPaid: true
  },
  {
    id: "2",
    orderNumber: "SO-2024-002",
    customerId: "2", // TechStart Inc
    status: "processing",
    orderDate: new Date("2024-01-05"),
    deliveryDate: new Date("2024-01-12"),
    dueDate: new Date("2024-03-05"),
    paymentTerms: "net60",
    currency: "USD",
    subtotal: 1599.96,
    taxTotal: 135.99,
    discountTotal: 0,
    shippingCost: 29.99,
    total: 1765.94,
    notes: "Bulk order for new office",
    orderLines: [
      {
        id: "3",
        productId: "3",
        productName: "4K Monitor",
        productCode: "DISP-001",
        quantity: 4,
        unitPrice: 399.99,
        taxRate: 8.5,
        discount: 0,
        subTotal: 1599.96,
        total: 1735.95,
        unit: "piece",
        warehouse: "2",
        isCustom: false
      }
    ],
    shippingMethod: "3", // Overnight Shipping
    trackingNumber: "ONS987654321",
    paymentMethod: "2", // Bank Transfer
    isPaid: false
  },
  {
    id: "3",
    orderNumber: "SO-2024-003",
    customerId: "1", // Acme Corp
    status: "pending",
    orderDate: new Date("2024-01-10"),
    dueDate: new Date("2024-02-09"),
    paymentTerms: "net30",
    currency: "USD",
    subtotal: 899.97,
    taxTotal: 76.50,
    discountTotal: 89.99,
    shippingCost: 9.99,
    total: 896.47,
    customerNotes: "Please include installation manual",
    orderLines: [
      {
        id: "4",
        productId: "2",
        productName: "Wireless Mouse",
        productCode: "ACC-001",
        quantity: 30,
        unitPrice: 29.99,
        taxRate: 8.5,
        discount: 10,
        subTotal: 899.97,
        total: 886.48,
        unit: "piece",
        warehouse: "1",
        isCustom: false
      }
    ],
    shippingMethod: "1", // Standard Shipping
    paymentMethod: "1", // Credit Card
    isPaid: false
  }
]

export {
  customers,
  products,
  warehouses,
  shippingMethods,
  paymentMethods,
  initialOrderLines,
  sampleSalesOrders
}

