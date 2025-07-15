// import * as React from 'react';
// import {
//   LayoutDashboard,
//   ShoppingBag,
//   Users,
//   ClipboardList,
//   Settings,
//   ShieldCheck,
//   Layers2,
//   Megaphone,
//   Ticket,
//   ListChecks,
//   User,
//   BarChart,
//   FileText,
//   CreditCard,
//   Key,
//   Crown,
//   Package,
// } from 'lucide-react';

// interface NavItem {
//   title: string;
//   href: string;
//   icon: React.ElementType;
//   permission: string;
// }

// interface NavItemParent {
//   label: string;
//   items: NavItem[];
// }

// export const navItems: NavItemParent[] = [
//   {
//     label: 'Navigation',
//     items: [
//       {
//         title: 'Dashboard',
//         href: '/dashboard',
//         icon: LayoutDashboard,
//         permission: 'dashboard:view',
//       },
//       {
//         title: 'Products',
//         href: '/products',
//         icon: ShoppingBag,
//         permission: 'products:view',
//       },
//       {
//         title: 'Add Product',
//         href: '/add-product',
//         icon: Package,
//         permission: 'products:view',
//       },
//       {
//         title: 'Brands',
//         href: '/brands',
//         icon: Crown,
//         permission: 'products:view',
//       },
//       {
//         title: 'Units',
//         href: '/units',
//         icon: Crown,
//         permission: 'products:view',
//       },
//       {
//         title: 'Categories',
//         href: '/categories',
//         icon: Layers2,
//         permission: 'products:view',
//       },
//       {
//         title: 'Product Types',
//         href: '/product-types',
//         icon: ListChecks,
//         permission: 'orders:view',
//       },
//       {
//         title: 'Product Variants',
//         href: '/product-variants',
//         icon: ClipboardList,
//         permission: 'orders:view',
//       },
//       {
//         title: 'Tags',
//         href: '/tags',
//         icon: ClipboardList,
//         permission: 'orders:view',
//       },
//     ],
//   },
//   {
//     label: 'Promo',
//     items: [
//       {
//         title: 'Coupons',
//         href: '/coupons',
//         icon: Ticket,
//         permission: 'users:view',
//       },
//       {
//         title: 'Promotions',
//         href: '/promotions',
//         icon: Megaphone,
//         permission: 'users:view',
//       },
//     ],
//   },
//   {
//     label: 'Users',
//     items: [
//       {
//         title: 'Users',
//         href: '/users',
//         icon: User,
//         permission: 'users:view',
//       },
//       {
//         title: 'Administrators',
//         href: '/administrators',
//         icon: ShieldCheck,
//         permission: 'roles:view',
//       },
//       {
//         title: 'Customers',
//         href: '/customers',
//         icon: Users,
//         permission: 'customers:view',
//       },
//     ],
//   },
//   {
//     label: 'Analytics',
//     items: [
//       {
//         title: 'Analytics',
//         href: '/analytics',
//         icon: BarChart,
//         permission: 'analytics:view',
//       },
//       {
//         title: 'Reports',
//         href: '/reports',
//         icon: FileText,
//         permission: 'reports:view',
//       },
//       {
//         title: 'Billing',
//         href: '/billing',
//         icon: CreditCard,
//         permission: 'billing:view',
//       },
//     ],
//   },
//   {
//     label: 'Security',
//     items: [
//       {
//         title: 'Settings',
//         href: '/settings',
//         icon: Settings,
//         permission: 'settings:view',
//       },
//       // {
//       //   title: 'Roles',
//       //   href: '/roles',
//       //   icon: ShieldCheck,
//       //   permission: 'roles:view',
//       // },
//       {
//         title: 'Roles & Permissions',
//         href: '/roles',
//         icon: Key,
//         permission: 'roles:view',
//       },
//     ],
//   },
// ];
