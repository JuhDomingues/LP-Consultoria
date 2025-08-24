import { useState } from "react";
import { ExecutiveButton } from "./ExecutiveButton";
import { PremiumCard } from "./PremiumCard";

export const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', whatsapp: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (showSuccess) {
    return (
      <PremiumCard title="✅ Dados Recebidos com Sucesso!" className="bg-success-light border-success text-center">
        <p className="text-lg text-success">
          Em breve você receberá as instruções para acessar seu Diagnóstico Premium!
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Verifique seu email e WhatsApp nos próximos minutos.
        </p>
      </PremiumCard>
    );
  }

  return (
    <PremiumCard title="🎯 PREENCHA SEUS DADOS PARA CONTINUAR" className="bg-card-premium border-premium">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Profissional *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="seu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
            WhatsApp *
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="(11) 99999-9999"
          />
        </div>
        
        <ExecutiveButton 
          type="submit" 
          variant="premium" 
          size="lg" 
          className="w-full mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'PROCESSANDO...' : 'GARANTIR MEU DIAGNÓSTICO PREMIUM'}
        </ExecutiveButton>
        
        <p className="text-xs text-muted-foreground text-center mt-3">
          Seus dados estão 100% seguros. Não compartilhamos com terceiros.
        </p>
      </form>
    </PremiumCard>
  );
};