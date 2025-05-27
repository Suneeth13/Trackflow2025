
import React, { useState } from 'react';
import { Plus, Search, Package, Truck, Clock, CheckCircle2, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import AddOrderForm from '@/components/AddOrderForm';

interface Order {
  id: number;
  leadId: number;
  clientName: string;
  clientCompany: string;
  status: string;
  orderDate: string;
  expectedDelivery: string;
  dispatchDetails?: {
    courier: string;
    trackingNumber: string;
    dispatchDate: string;
  };
  progress: number;
  orderValue: string;
  productType: string;
}

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddOrderOpen, setIsAddOrderOpen] = useState(false);

  const orderStatuses = [
    'Order Received',
    'In Development',
    'Ready to Dispatch',
    'Dispatched'
  ];

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      leadId: 1,
      clientName: 'John Smith',
      clientCompany: 'Acme Corp',
      status: 'In Development',
      orderDate: '2024-05-20',
      expectedDelivery: '2024-06-15',
      progress: 65,
      orderValue: '$15,000',
      productType: 'CRM Software'
    },
    {
      id: 2,
      leadId: 2,
      clientName: 'Sarah Johnson',
      clientCompany: 'Tech Solutions',
      status: 'Ready to Dispatch',
      orderDate: '2024-05-18',
      expectedDelivery: '2024-05-30',
      progress: 90,
      orderValue: '$8,500',
      productType: 'Automation Tools'
    },
    {
      id: 3,
      leadId: 3,
      clientName: 'Mike Wilson',
      clientCompany: 'Global Inc',
      status: 'Order Received',
      orderDate: '2024-05-22',
      expectedDelivery: '2024-06-20',
      progress: 25,
      orderValue: '$25,000',
      productType: 'Full Suite'
    },
    {
      id: 4,
      leadId: 4,
      clientName: 'David Chen',
      clientCompany: 'Future Tech',
      status: 'Dispatched',
      orderDate: '2024-05-15',
      expectedDelivery: '2024-05-25',
      dispatchDetails: {
        courier: 'FedEx',
        trackingNumber: 'FX123456789',
        dispatchDate: '2024-05-24'
      },
      progress: 100,
      orderValue: '$12,000',
      productType: 'Enterprise Package'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Order Received': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'In Development': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Ready to Dispatch': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Dispatched': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Order Received': return <Package className="h-4 w-4" />;
      case 'In Development': return <Clock className="h-4 w-4" />;
      case 'Ready to Dispatch': return <CheckCircle2 className="h-4 w-4" />;
      case 'Dispatched': return <Truck className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const filteredOrders = orders.filter(order =>
    order.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.clientCompany.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.productType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrder = (newOrder: Omit<Order, 'id'>) => {
    const order = { ...newOrder, id: Date.now() };
    setOrders([...orders, order]);
    setIsAddOrderOpen(false);
  };

  const OrderCard = ({ order }: { order: Order }) => (
    <Card className="mb-4 hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-semibold text-lg text-gray-900">{order.clientName}</h4>
            <p className="text-gray-600">{order.clientCompany}</p>
            <p className="text-sm text-gray-500">Order #{order.id}</p>
          </div>
          <div className="text-right">
            <Badge className={getStatusColor(order.status)}>
              {getStatusIcon(order.status)}
              <span className="ml-1">{order.status}</span>
            </Badge>
            <p className="text-lg font-bold text-gray-900 mt-1">{order.orderValue}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Product:</span>
            <span className="font-medium">{order.productType}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Order Date:</span>
            <span>{order.orderDate}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Expected Delivery:</span>
            <span>{order.expectedDelivery}</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{order.progress}%</span>
          </div>
          <Progress value={order.progress} className="h-2" />
        </div>

        {order.dispatchDetails && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <h5 className="font-medium text-green-900 mb-2">Dispatch Details</h5>
            <div className="space-y-1 text-sm text-green-800">
              <div>Courier: {order.dispatchDetails.courier}</div>
              <div>Tracking: {order.dispatchDetails.trackingNumber}</div>
              <div>Dispatched: {order.dispatchDetails.dispatchDate}</div>
            </div>
          </div>
        )}

        <div className="flex justify-end mt-4">
          <Button variant="ghost" size="sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600">Track and manage your order pipeline</p>
        </div>
        
        <Dialog open={isAddOrderOpen} onOpenChange={setIsAddOrderOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Order
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Order</DialogTitle>
              <DialogDescription>
                Create a new order from an existing lead or client.
              </DialogDescription>
            </DialogHeader>
            <AddOrderForm onSubmit={handleAddOrder} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search orders by client, company, or product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {orderStatuses.map((status) => {
          const statusOrders = filteredOrders.filter(order => order.status === status);
          const totalValue = statusOrders.reduce((sum, order) => {
            const value = parseFloat(order.orderValue.replace('$', '').replace(',', ''));
            return sum + value;
          }, 0);

          return (
            <Card key={status}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(status)}
                    <span className="font-medium text-gray-900">{status}</span>
                  </div>
                  <Badge variant="secondary">{statusOrders.length}</Badge>
                </div>
                <p className="text-lg font-bold text-gray-900">
                  ${totalValue.toLocaleString()}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredOrders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">
              {searchTerm ? 'Try adjusting your search criteria.' : 'Create your first order to get started.'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrderManagement;
