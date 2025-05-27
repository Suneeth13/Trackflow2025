
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AddOrderFormProps {
  onSubmit: (order: {
    leadId: number;
    clientName: string;
    clientCompany: string;
    status: string;
    orderDate: string;
    expectedDelivery: string;
    progress: number;
    orderValue: string;
    productType: string;
  }) => void;
}

const AddOrderForm = ({ onSubmit }: AddOrderFormProps) => {
  const [formData, setFormData] = useState({
    leadId: 0,
    clientName: '',
    clientCompany: '',
    status: 'Order Received',
    orderDate: new Date().toISOString().split('T')[0],
    expectedDelivery: '',
    progress: 10,
    orderValue: '',
    productType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    
    // Reset form
    setFormData({
      leadId: 0,
      clientName: '',
      clientCompany: '',
      status: 'Order Received',
      orderDate: new Date().toISOString().split('T')[0],
      expectedDelivery: '',
      progress: 10,
      orderValue: '',
      productType: ''
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="clientName">Client Name</Label>
          <Input
            id="clientName"
            value={formData.clientName}
            onChange={(e) => handleInputChange('clientName', e.target.value)}
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <Label htmlFor="clientCompany">Company</Label>
          <Input
            id="clientCompany"
            value={formData.clientCompany}
            onChange={(e) => handleInputChange('clientCompany', e.target.value)}
            placeholder="Acme Corp"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="productType">Product Type</Label>
        <Select onValueChange={(value) => handleInputChange('productType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select product type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CRM Software">CRM Software</SelectItem>
            <SelectItem value="Automation Tools">Automation Tools</SelectItem>
            <SelectItem value="Full Suite">Full Suite</SelectItem>
            <SelectItem value="Basic Plan">Basic Plan</SelectItem>
            <SelectItem value="Enterprise Package">Enterprise Package</SelectItem>
            <SelectItem value="Custom Solution">Custom Solution</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="orderValue">Order Value</Label>
          <Input
            id="orderValue"
            value={formData.orderValue}
            onChange={(e) => handleInputChange('orderValue', e.target.value)}
            placeholder="$15,000"
            required
          />
        </div>
        <div>
          <Label htmlFor="expectedDelivery">Expected Delivery</Label>
          <Input
            id="expectedDelivery"
            type="date"
            value={formData.expectedDelivery}
            onChange={(e) => handleInputChange('expectedDelivery', e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="status">Initial Status</Label>
        <Select defaultValue="Order Received" onValueChange={(value) => handleInputChange('status', value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Order Received">Order Received</SelectItem>
            <SelectItem value="In Development">In Development</SelectItem>
            <SelectItem value="Ready to Dispatch">Ready to Dispatch</SelectItem>
            <SelectItem value="Dispatched">Dispatched</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
        Create Order
      </Button>
    </form>
  );
};

export default AddOrderForm;
