
import React from 'react';
import { 
  Users, 
  Package, 
  TrendingUp, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Leads',
      value: '147',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Orders',
      value: '23',
      change: '+8.2%',
      trend: 'up',
      icon: Package,
      color: 'green'
    },
    {
      title: 'Conversion Rate',
      value: '18.5%',
      change: '+3.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Follow-ups Due',
      value: '8',
      change: '-2',
      trend: 'down',
      icon: Calendar,
      color: 'orange'
    }
  ];

  const recentLeads = [
    { id: 1, name: 'Acme Corp', contact: 'John Smith', stage: 'Qualified', priority: 'High' },
    { id: 2, name: 'Tech Solutions', contact: 'Sarah Johnson', stage: 'Contacted', priority: 'Medium' },
    { id: 3, name: 'Global Inc', contact: 'Mike Wilson', stage: 'Proposal Sent', priority: 'High' },
    { id: 4, name: 'StartupXYZ', contact: 'Lisa Chen', stage: 'New', priority: 'Low' },
  ];

  const recentOrders = [
    { id: 1, client: 'Acme Corp', status: 'In Development', progress: 65 },
    { id: 2, client: 'Tech Solutions', status: 'Ready to Dispatch', progress: 90 },
    { id: 3, client: 'Global Inc', status: 'Order Received', progress: 25 },
    { id: 4, client: 'Future Tech', status: 'Dispatched', progress: 100 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-gray-100 text-gray-800';
      case 'Contacted': return 'bg-blue-100 text-blue-800';
      case 'Qualified': return 'bg-green-100 text-green-800';
      case 'Proposal Sent': return 'bg-yellow-100 text-yellow-800';
      case 'Won': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'Order Received': return 'bg-blue-100 text-blue-800';
      case 'In Development': return 'bg-yellow-100 text-yellow-800';
      case 'Ready to Dispatch': return 'bg-orange-100 text-orange-800';
      case 'Dispatched': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Monitor your CRM performance and track key metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 text-${stat.color}-500`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center space-x-1 text-sm">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="text-gray-500">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span>Recent Leads</span>
            </CardTitle>
            <CardDescription>Latest leads added to your pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{lead.name}</h4>
                    <p className="text-sm text-gray-600">{lead.contact}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(lead.stage)}>
                      {lead.stage}
                    </Badge>
                    <Badge variant={lead.priority === 'High' ? 'destructive' : lead.priority === 'Medium' ? 'default' : 'secondary'}>
                      {lead.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-green-500" />
              <span>Active Orders</span>
            </CardTitle>
            <CardDescription>Current orders in progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{order.client}</h4>
                    <Badge className={getOrderStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{order.progress}% complete</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-orange-500" />
            <span>Follow-ups Due This Week</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Tech Innovations Ltd</h4>
                  <p className="text-sm text-gray-600">Due Today</p>
                </div>
                <Clock className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Future Systems</h4>
                  <p className="text-sm text-gray-600">Due Tomorrow</p>
                </div>
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Digital Solutions</h4>
                  <p className="text-sm text-gray-600">Due Friday</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
