
import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AddLeadForm from '@/components/AddLeadForm';

interface Lead {
  id: number;
  name: string;
  contact: string;
  company: string;
  stage: string;
  followUpDate: string;
  notes: string;
  productInterest: string;
  email: string;
  phone: string;
}

const LeadManagement = () => {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);

  const stages = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost'];
  
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      name: 'John Smith',
      contact: 'john@acmecorp.com',
      company: 'Acme Corp',
      stage: 'Qualified',
      followUpDate: '2024-05-28',
      notes: 'Interested in enterprise solution',
      productInterest: 'CRM Software',
      email: 'john@acmecorp.com',
      phone: '+1-555-0123'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      contact: 'sarah@techsol.com',
      company: 'Tech Solutions',
      stage: 'Contacted',
      followUpDate: '2024-05-30',
      notes: 'Needs demo next week',
      productInterest: 'Automation Tools',
      email: 'sarah@techsol.com',
      phone: '+1-555-0124'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      contact: 'mike@globalinc.com',
      company: 'Global Inc',
      stage: 'Proposal Sent',
      followUpDate: '2024-05-25',
      notes: 'Waiting for approval from board',
      productInterest: 'Full Suite',
      email: 'mike@globalinc.com',
      phone: '+1-555-0125'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      contact: 'lisa@startupxyz.com',
      company: 'StartupXYZ',
      stage: 'New',
      followUpDate: '2024-05-26',
      notes: 'Initial inquiry about pricing',
      productInterest: 'Basic Plan',
      email: 'lisa@startupxyz.com',
      phone: '+1-555-0126'
    },
  ]);

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'New': return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'Contacted': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Qualified': return 'bg-green-100 text-green-800 border-green-300';
      case 'Proposal Sent': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Won': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Lost': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddLead = (newLead: Omit<Lead, 'id'>) => {
    const lead = { ...newLead, id: Date.now() };
    setLeads([...leads, lead]);
    setIsAddLeadOpen(false);
  };

  const LeadCard = ({ lead }: { lead: Lead }) => (
    <Card className="mb-3 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="font-semibold text-gray-900">{lead.name}</h4>
            <p className="text-sm text-gray-600">{lead.company}</p>
          </div>
          <Badge className={getStageColor(lead.stage)}>
            {lead.stage}
          </Badge>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>{lead.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>{lead.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Follow-up: {lead.followUpDate}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">{lead.productInterest}</p>
          {lead.notes && (
            <p className="text-xs text-gray-600 mt-1 italic">"{lead.notes}"</p>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600">Track and manage your sales pipeline</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'kanban' ? 'default' : 'outline'}
              onClick={() => setViewMode('kanban')}
              size="sm"
            >
              Kanban
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
              size="sm"
            >
              List
            </Button>
          </div>
          
          <Dialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Lead
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Lead</DialogTitle>
                <DialogDescription>
                  Enter the details for the new lead to add to your pipeline.
                </DialogDescription>
              </DialogHeader>
              <AddLeadForm onSubmit={handleAddLead} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search leads by name, company, or contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </div>

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stages.map((stage) => (
            <div key={stage} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{stage}</h3>
                <Badge variant="secondary" className="text-xs">
                  {filteredLeads.filter(lead => lead.stage === stage).length}
                </Badge>
              </div>
              
              <div className="space-y-3">
                {filteredLeads
                  .filter(lead => lead.stage === stage)
                  .map(lead => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <Card>
          <CardHeader>
            <CardTitle>All Leads ({filteredLeads.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredLeads.map(lead => (
                <div key={lead.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                        <p className="text-sm text-gray-600">{lead.company}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        <p className="text-sm text-gray-600">{lead.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Interest: {lead.productInterest}</p>
                        <p className="text-sm text-gray-600">Follow-up: {lead.followUpDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getStageColor(lead.stage)}>
                      {lead.stage}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LeadManagement;
