
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, MessageSquare, Search, Award, Smartphone, Users, Zap, ShieldCheck, PenTool, BrainCircuit, XCircle, Star, Gift, Package, Palette, TrendingUp } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20empresa%20de%20brindes.";

  const portfolioCases = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/718a0e5e3_portfolio-51-a-100-Prancheta-36.png"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ae213e148_volunteers-working-in-a-charity-donation-center-an-2025-04-01-13-06-19-utc.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Gift className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Seu brinde pode até ser simples. Mas sua marca precisa ser inesquecível.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Toda empresa quer ser lembrada. A dúvida é: Seu negócio transmite profissionalismo e criatividade já no primeiro clique?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Se vende brindes, seu site precisa vender mais do que produtos. Precisa vender confiança.</h2>
             <p className="text-xl text-zinc-300 mt-6">Quem já trabalha com personalização, precisa de um site com personalidade. Um site estratégico mostra por que vale a pena comprar de você.</p>
          </div>
        </section>

        {/* What a site can do */}
        <section className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que seu novo site vai fazer por você:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Aparecer no Google quando alguém buscar pelos seus serviços",
                        "Mostrar seus diferenciais com impacto visual e credibilidade",
                        "Aumentar os agendamentos via botão de WhatsApp e chamadas estratégicas",
                        "Valorizar sua marca e transmitir segurança antes mesmo do primeiro pedido",
                        "Trabalhar por você 24 horas por dia, todos os dias da semana",
                        "Organizar seu portfólio de forma atrativa e profissional",
                    ].map(item => (
                         <div key={item} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <CheckCircle className="w-6 h-6 text-[#FF004D] shrink-0 mt-1"/>
                            <p className="text-lg text-zinc-300">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">O que entregamos</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Package className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Site completo para empresas de brindes</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Ideal para brindes corporativos, camisetas promocionais, canecas e acessórios personalizados.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Página inicial com apelo comercial e visual impactante",
                               "Galeria com categorias organizadas por tipo de produto",
                               "Página de 'Quem Somos' com a história da marca",
                               "Páginas de produtos com descrições atrativas",
                               "Filtros por ocasião, tipo, material ou volume",
                               "Página de contato com WhatsApp integrado",
                               "SEO para 'brindes personalizados em [sua cidade]'",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>

                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Landing Pages para campanhas específicas</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Perfeitas para ações promocionais, lançamentos ou campanhas sazonais.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Ação promocional de fim de ano",
                               "Lançamento de nova linha de brindes ecológicos",
                               "Kits personalizados para datas comemorativas",
                               "Canecas temáticas para empresas",
                               "Camisetas para ações internas ou eventos",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Funcionalidade que vende</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: PenTool, title: "Painel Administrativo", description: "Você atualiza produtos, banners e fotos" },
                    { icon: Search, title: "SEO Otimizado", description: "Para produtos, categorias e segmentos" },
                    { icon: Smartphone, title: "100% Responsivo", description: "Funciona bem em todos os dispositivos" },
                    { icon: Zap, title: "Site Rápido", description: "Pronto para tráfego e campanhas pagas" },
                ].map(item => (
                     <div key={item.title} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                        <item.icon className="w-8 h-8 text-[#FF004D] mx-auto mb-3"/>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Nosso Portfólio</h2>
              <p className="text-zinc-400 mt-4">Veja um exemplo de site que já entregamos</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50 bg-white sm:col-start-1 lg:col-start-2"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Exemplo de site ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Site básico vs. Site feito pela Mati Studio</h2>
            <div className="bg-black rounded-xl overflow-hidden border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <h3 className="font-bold text-xl text-red-500 mb-4 flex items-center gap-2"><XCircle/> Problemas comuns</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Layout genérico e pouco atrativo</li>
                            <li>Produtos bagunçados ou difíceis de navegar</li>
                            <li>Dificuldade de contato</li>
                            <li>Pouca presença nas buscas</li>
                            <li>Textos genéricos e sem apelo comercial</li>
                        </ul>
                    </div>
                    <div className="p-8 bg-zinc-800/50">
                        <h3 className="font-bold text-xl text-green-400 mb-4 flex items-center gap-2"><CheckCircle/> Soluções da Mati Studio</h3>
                         <ul className="space-y-2 text-zinc-300">
                            <li>Design visual moderno com sua identidade</li>
                            <li>Galeria organizada com filtros intuitivos</li>
                            <li>WhatsApp e formulários em destaque</li>
                            <li>SEO aplicado desde o início</li>
                            <li>Copy estratégica com foco em venda</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que sua empresa vai ganhar:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Mais pedidos de orçamento de forma prática e rápida",
                        "Marca valorizada como referência em brindes criativos",
                        "Visibilidade nas buscas do Google",
                        "Estrutura organizada que facilita o entendimento e gera confiança",
                        "Posicionamento forte para vender mais em datas sazonais",
                        "Comunicação facilitada com o cliente certo, no momento certo",
                    ].map(result => (
                         <div key={result} className="flex items-center gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <Star className="w-6 h-6 text-[#FF004D] shrink-0"/>
                            <p className="text-lg text-zinc-300">{result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Gift className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">O brinde começa muito antes da entrega. Começa na confiança de quem vai fazer.</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-10">Está na hora do seu site representar o cuidado que você coloca em cada peça personalizada. Seu próximo grande pedido pode estar a um clique de distância.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero meu site profissional agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites profissionais para empresas de brindes que querem se destacar no Google e na mente dos seus clientes.</p>
        </div>
      </footer>
    </>
  );
}
