/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Star, Zap, Shield, Crown } from "lucide-react";

const paymentLinks = {
  retro: "https://pay.kirvano.com/9de3e1b4-805f-47ca-87ca-3b1c236d61c4?aff=d0a5c65d-d455-47cf-99bc-dd680f18423a",
  especial: "https://pay.kirvano.com/3d640f71-8a36-4f93-9d17-ccfce864e301?aff=55fe804b-3536-417f-b388-bd647b5757c3",
  ultimate: "https://pay.kirvano.com/83c492d9-778d-429e-b976-4a4c708093dd?aff=2117d03f-d1a7-4ab4-b532-e9b0e493aefc",
  steamPremium: "https://pay.kirvano.com/d647c4eb-2566-46a6-bf12-81faa34e3bec?aff=c228b4c9-111a-4995-b336-c468af564a89"
};

const plans = [
  {
    id: "retro",
    name: "Plano Retrô",
    price: "R$ 38,90",
    description: "Ideal para quem ama os clássicos e quer reviver a nostalgia.",
    features: ["Acesso a 500+ jogos retrô", "Suporte básico", "Atualizações mensais", "Comunidade exclusiva"],
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    link: paymentLinks.retro,
    color: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30"
  },
  {
    id: "especial",
    name: "Plano Especial",
    price: "R$ 68,90",
    description: "O equilíbrio perfeito entre custo e benefício para jogadores casuais.",
    features: ["Acesso a 1500+ jogos", "Suporte prioritário", "Atualizações quinzenais", "Sorteios exclusivos"],
    icon: <Star className="w-6 h-6 text-purple-400" />,
    link: paymentLinks.especial,
    color: "from-purple-500/20 to-purple-600/20",
    border: "border-purple-500/30",
    popular: true
  },
  {
    id: "ultimate",
    name: "Plano Ultimate",
    price: "R$ 98,90",
    description: "A experiência completa para quem não aceita nada menos que o melhor.",
    features: ["Acesso ilimitado a todos os jogos", "Suporte 24/7", "Atualizações diárias", "Acesso antecipado a lançamentos", "Servidor VIP"],
    icon: <Shield className="w-6 h-6 text-orange-400" />,
    link: paymentLinks.ultimate,
    color: "from-orange-500/20 to-orange-600/20",
    border: "border-orange-500/30"
  },
  {
    id: "steamPremium",
    name: "Plano Steam",
    price: "R$ 97,90",
    description: "O nível máximo de prestígio e recursos exclusivos para colecionadores.",
    features: ["Tudo do Ultimate", "Insígnias exclusivas", "Personalização de perfil avançada", "Jogos Steam selecionados inclusos"],
    icon: <Crown className="w-6 h-6 text-yellow-400" />,
    link: paymentLinks.steamPremium,
    color: "from-yellow-500/20 to-yellow-600/20",
    border: "border-yellow-500/30"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Escolha seu Plano
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Desbloqueie uma biblioteca infinita de jogos e recursos exclusivos. 
              Selecione o plano que melhor se adapta ao seu estilo de jogo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.border} bg-gradient-to-b ${plan.color} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gray-900/50 flex items-center justify-center mb-4 border border-white/10">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 text-sm">/mês</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                  plan.popular 
                    ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/20" 
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Assinar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 Meu Site de Jogos. Todos os direitos reservados. 
          Pagamentos processados com segurança via Kirvano.
        </p>
      </footer>
    </div>
  );
}

