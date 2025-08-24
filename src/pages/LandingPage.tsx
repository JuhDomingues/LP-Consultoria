import { ExecutiveButton } from "@/components/ExecutiveButton";
import { PremiumCard } from "@/components/PremiumCard";
import { FeatureList } from "@/components/FeatureList";
import { PriceComparison } from "@/components/PriceComparison";
import { CountdownTimer } from "@/components/CountdownTimer";

const LandingPage = () => {
  const pillars = [
    "Protagonismo",
    "Inteligência Política e Emocional",
    "Visão Estratégica",
    "Liderança de Influência",
    "Execução Estratégica"
  ];

  const reportItems = [
    "Seus pontos fortes específicos",
    "Gaps críticos identificados", 
    "Benchmarking com executivos de sucesso",
    "Nível atual vs. nível desejado"
  ];

  const actionPlanItems = [
    "Estratégias específicas para seus gaps",
    "Cronograma de implementação",
    "Métricas de acompanhamento",
    "Próximos passos prioritários"
  ];

  const exclusiveResources = [
    "Scripts para conversas de desenvolvimento",
    "Matriz de mapeamento de stakeholders", 
    "Guia de presença em reuniões"
  ];

  const priceComparisons = [
    { service: "Um jantar executivo", price: "R$180+" },
    { service: "Uma sessão de coaching genérico", price: "R$200+" },
    { service: "Um curso online básico de carreira", price: "R$497+" },
    { service: "O custo de permanecer estagnado por 6 meses", price: "R$12.000+" }
  ];

  const urgencyItems = [
    "Apenas 15 vagas disponíveis (análise personalizada requer tempo dedicado)",
    "Preço especial válido apenas por 24h (depois volta para R$297)",
    "Exclusivo para quem se cadastrou hoje (não será oferecido novamente)"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/hero-executive-new.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <img 
                src="/logo-nobg.png" 
                alt="Logo" 
                className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-2xl mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl leading-tight">
              Descubra os Gaps Ocultos que Estão Limitando sua <span className="text-accent font-extrabold">Ascensão Executiva</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-lg mb-8">
              Pare de adivinhar o que falta na sua carreira e receba uma consultoria profissional que mostra exatamente seus pontos cegos — com plano de ação claro para avançar.
            </p>
            <ExecutiveButton 
              variant="premium" 
              size="xl" 
              className="shadow-2xl mb-16"
              onClick={() => window.open('https://payfast.greenn.com.br/127461/offer/pIH8pD', '_blank')}
            >
              QUERO MINHA CONSULTORIA PREMIUM - R$47
            </ExecutiveButton>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Offer Introduction */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              POR ISSO DESENVOLVI ALGO ESPECIAL PARA VOCÊ:
            </h2>
          </div>
        </section>

        {/* Offer Presentation */}
        <section className="mb-16">
          <PremiumCard title="CONSULTORIA EXECUTIVA PREMIUM" highlight className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-premium mb-2">
                Análise Completa do Seu Potencial de Liderança
              </h3>
              <p className="text-lg text-muted-foreground">
                Uma análise profissional completa que identifica precisamente seus gaps nos 5 elementos críticos da ascensão executiva.
              </p>
            </div>
          </PremiumCard>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <PremiumCard title="🎯 Análise Detalhada dos 5 Pilares Executivos">
              <FeatureList items={pillars} />
            </PremiumCard>

            <PremiumCard title="📊 Relatório Personalizado">
              <FeatureList items={reportItems} />
            </PremiumCard>

            <PremiumCard title="🚀 Plano de Ação">
              <FeatureList items={actionPlanItems} />
            </PremiumCard>

            <PremiumCard title="💎 Recursos Exclusivos">
              <FeatureList items={exclusiveResources} />
            </PremiumCard>
          </div>
        </section>

        {/* Value Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              NORMALMENTE, ESTE TIPO DE ANÁLISE CUSTA R$2.500+ EM CONSULTORIAS EXECUTIVAS
            </h2>
            <p className="text-xl text-muted-foreground">
              Mas porque você demonstrou seriedade se cadastrando para receber nossas estratégias, tenho uma proposta especial...
            </p>
          </div>

          <PremiumCard title="OFERTA LIMITADA:" highlight className="text-center mb-8">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-premium">APENAS HOJE: R$47</div>
              <div className="text-xl text-muted-foreground line-through">Valor normal: R$297</div>
            </div>
          </PremiumCard>

          <PremiumCard title="POR QUE R$47?">
            <PriceComparison items={priceComparisons} specialPrice="R$47" />
          </PremiumCard>
        </section>

        {/* Urgency Triggers */}
        <section className="mb-16">
          <div className="bg-urgent-light border border-urgent rounded-xl p-8">
            <h2 className="text-2xl font-bold text-urgent text-center mb-6">
              ⚠️ ATENÇÃO: OFERTA LIMITADA
            </h2>
            <FeatureList items={urgencyItems} icon="✓" className="text-lg" />
          </div>
        </section>

        {/* Guarantee */}
        <section className="mb-16">
          <PremiumCard title="🛡️ GARANTIA DE SATISFAÇÃO TOTAL" className="bg-success-light border-success text-center">
            <p className="text-lg leading-relaxed">
              Se após receber sua Consultoria Premium você não identificar pelo menos 3 gaps específicos que pode resolver nos próximos 90 dias, <strong>devolvemos 100% do investimento</strong>.
            </p>
            <p className="text-success font-semibold mt-4">
              Sem perguntas. Sem complicações. Sem riscos.
            </p>
          </PremiumCard>
        </section>

        {/* Main CTA */}
        <section className="mb-16 text-center">
          <div className="bg-urgent/10 border border-urgent rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-urgent mb-4">
              ⚡ OFERTA EXPIRA EM:
            </h3>
            <div className="flex justify-center mb-4">
              <CountdownTimer hours={24} />
            </div>
            <p className="text-sm text-urgent/80">
              Após este prazo, o preço volta para R$297
            </p>
          </div>
          
          <ExecutiveButton 
            variant="premium" 
            size="xl" 
            className="w-full md:w-auto mb-4"
            onClick={() => window.open('https://payfast.greenn.com.br/127461/offer/pIH8pD', '_blank')}
          >
            QUERO MINHA CONSULTORIA PREMIUM POR R$47
          </ExecutiveButton>
          <p className="text-muted-foreground">
            Análise personalizada + Plano de Ação + Garantia total
          </p>
        </section>

        {/* Final Urgency */}
        <section className="mb-16">
          <div className="bg-urgent/10 border border-urgent rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-urgent mb-6">
              ⚠️ ÚLTIMAS HORAS DESTA OFERTA ESPECIAL
            </h2>
            <div className="text-lg space-y-2 text-urgent">
              <p>Em breve o investimento volta para R$297</p>
              <div className="space-y-1 text-urgent/80 text-base">
                <p>• Lista de espera regular tem mais de 200 pessoas</p>
                <p>• Próxima oportunidade com desconto apenas em 2025</p>
                <p>• Vagas limitadas para análise personalizada</p>
              </div>
            </div>
          </div>
        </section>

        {/* P.S. */}
        <section className="text-center">
          <div className="bg-card-premium border border-premium rounded-xl p-8 mb-8">
            <h3 className="font-bold text-xl mb-4">P.S.</h3>
            <p className="text-lg leading-relaxed mb-6">
              Você acabou de demonstrar que leva desenvolvimento profissional a sério. Esta pode ser a decisão de R$47 que acelera sua carreira em anos.
            </p>
            <p className="text-xl font-semibold text-primary mb-6">
              A pergunta é: você quer continuar adivinhando o que está impedindo sua ascensão, ou quer saber exatamente?
            </p>
          </div>
          
          <ExecutiveButton 
            variant="success" 
            size="xl" 
            className="w-full md:w-auto"
            onClick={() => window.open('https://payfast.greenn.com.br/127461/offer/pIH8pD', '_blank')}
          >
            SIM, QUERO SABER EXATAMENTE - R$47
          </ExecutiveButton>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;