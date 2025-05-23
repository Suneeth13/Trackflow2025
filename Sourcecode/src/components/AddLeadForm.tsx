
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface AddLeadFormProps {
  onSubmit: (lead: {
    name: string;
    contact: string;
    company: string;
    stage: string;
    followUpDate: string;
    notes: string;
    productInterest: string;
    email: string;
    phone: string;
  }) => void;
}

const AddLeadForm = ({ onSubmit }: AddLeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    stage: 'New',
    followUpDate: '',
    notes: '',
    productInterest: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      contact: formData.email // Using email as primary contact
    });
    
    // Reset form
    setFormData({
      name: '',
      contact: '',
      company: '',
      stage: 'New',
      followUpDate: '',
      notes: '',
      productInterest: '',
      email: '',
      phone: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Contact Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Acme Corp"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john@acmecorp.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1-555-0123"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="productInterest">Product Interest</Label>
          <Select onValueChange={(value) => handleInputChange('productInterest', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CRM Software">CRM Software</SelectItem>
              <SelectItem value="Automation Tools">Automation Tools</SelectItem>
              <SelectItem value="Full Suite">Full Suite</SelectItem>
              <SelectItem value="Basic Plan">Basic Plan</SelectItem>
              <SelectItem value="Enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="stage">Initial Stage</Label>
          <Select defaultValue="New" onValueChange={(value) => handleInputChange('stage', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Contacted">Contacted</SelectItem>
              <SelectItem value="Qualified">Qualified</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="followUpDate">Follow-up Date</Label>
        <Input
          id="followUpDate"
          type="date"
          value={formData.followUpDate}
          onChange={(e) => handleInputChange('followUpDate', e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
          placeholder="Add any relevant notes about this lead..."
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
        Add Lead
      </Button>
    </form>
  );
};

export default AddLeadForm;
