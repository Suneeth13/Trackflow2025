
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import LeadManagement from '@/components/LeadManagement';
import OrderManagement from '@/components/OrderManagement';
import { SidebarProvider } from '@/components/ui/sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SidebarProvider>
        <div className="flex w-full min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<LeadManagement />} />
              <Route path="/orders" element={<OrderManagement />} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
