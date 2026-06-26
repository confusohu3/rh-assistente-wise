import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import {
  MessageCircle,
  Clock,
  ShieldCheck,
  Calculator,
  FileText,
  Scale,
  Sparkles,
  Check,
  Building2,
  Zap,
  HeartHandshake,
  BookOpenCheck,
} from "lucide-react";

import LogoImage from "../assets/logo.png";
import LogoWhatsApp from "../assets/logo-1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Assessor do RH — IA de DP e Folha no WhatsApp" },
      {
        name: "description",
        content:
          "Consultas ilimitadas de Departamento Pessoal, folha e legislação trabalhista diretamente no WhatsApp. Planos a partir de R$ 97/mês.",
      },
      { property: "og:title", content: "Assessor do RH — IA para gestão de pessoas" },
      {
        property: "og:description",
        content:
          "IA especialista em DP, folha e eSocial no seu WhatsApp. Para contabilidades e profissionais de RH.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent("Olá! Quero contratar o Assessor do RH.");

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={LogoImage}
      style={{ width: "180px", height: "50px", objectFit: "cover" }}
      alt="Assessor do RH"
      className={className}
    />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Features />
      <UseCases />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo className="h-9" />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#como-funciona" className="hover:text-brand-navy transition">
            Como funciona
          </a>
          <a href="#recursos" className="hover:text-brand-navy transition">
            Recursos
          </a>
          <a href="#planos" className="hover:text-brand-navy transition">
            Planos
          </a>
          <a href="#faq" className="hover:text-brand-navy transition">
            FAQ
          </a>
        </nav>
        <a
          href="#planos"
          className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand transition hover:opacity-90"
        >
          Assinar agora
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-[0.04]" aria-hidden />
      <div
        className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent-gradient opacity-20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent-gradient opacity-15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:gap-10 md:pt-24 md:pb-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-brand-navy">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            IA especialista em Departamento Pessoal
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-brand-navy md:text-6xl">
            A IA que <span className="text-brand-blue">responde dúvidas de DP</span> direto no seu
            WhatsApp.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Consultas ilimitadas sobre folha de pagamento, eSocial, férias, rescisões e legislação
            trabalhista — em segundos, sem sair da conversa que você já usa todos os dias.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition hover:opacity-90"
            >
              Ver planos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "24/7", v: "Disponível dia e noite" },
              { k: "+500", v: "Tópicos de DP cobertos" },
              { k: "<10s", v: "Tempo médio de resposta" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-2xl font-bold text-brand-navy">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="absolute -inset-6 rounded-[3rem] bg-accent-gradient opacity-30 blur-2xl"
        aria-hidden
      />
      <div className="relative rounded-[2.25rem] border border-border bg-card p-3 shadow-brand">
        <div className="rounded-[1.75rem] bg-[#0b141a] p-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white">
              <img
                src={LogoWhatsApp}
                alt=""
                style={{ width: "200px" }}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Assessor do RH</p>
              <p className="text-xs text-green-400">online</p>
            </div>
          </div>
          <div className="space-y-3 py-4">
            <ChatBubble side="right">
              Funcionário pediu demissão sem cumprir aviso prévio. Posso descontar?
            </ChatBubble>
            <ChatBubble side="left">
              Sim. O empregador pode descontar o valor equivalente aos dias de aviso prévio não
              trabalhados, conforme art. 487, §2º da CLT. Quer que eu calcule o desconto para o
              salário desse colaborador?
            </ChatBubble>
            <ChatBubble side="right">Sim, salário de R$ 3.200.</ChatBubble>
            <ChatBubble side="left">
              Desconto de aviso prévio (30 dias): <b>R$ 3.200,00</b>. Posso gerar o passo a passo
              para lançar no eSocial?
            </ChatBubble>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  const isLeft = side === "left";
  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
          isLeft ? "bg-[#202c33] text-white rounded-tl-sm" : "bg-[#005c4b] text-white rounded-tr-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span>Feito para escritórios de contabilidade</span>
        <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />
        <span>Analistas de DP</span>
        <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />
        <span>RH operacional</span>
        <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />
        <span>Setor público</span>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    {
      icon: Clock,
      t: "Tempo perdido em pesquisa",
      d: "Horas procurando na CLT, NRs e instruções normativas para uma única dúvida.",
    },
    {
      icon: Calculator,
      t: "Cálculos com risco",
      d: "Rescisões, férias e horas extras conferidas no papel — e qualquer erro vira passivo.",
    },
    {
      icon: Scale,
      t: "Legislação que muda toda hora",
      d: "Convenções, eSocial e jurisprudência mudam constantemente. Ficar atualizado é exaustivo.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
          A rotina de DP não pode mais funcionar assim
        </h2>
        <p className="mt-4 text-muted-foreground">
          Você lida com várias empresas, prazos apertados e um Whatsapp lotado de dúvidas. Cada
          minuto vale dinheiro — e cada erro também.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-brand-blue">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-navy">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Assine seu plano",
      d: "Escolha o pacote pelo número de CNPJs que você atende e finalize a assinatura mensal.",
    },
    {
      n: "02",
      t: "Cadastre seus CNPJs",
      d: "Em poucos minutos, ativamos seu acesso e cadastramos as empresas que serão atendidas.",
    },
    {
      n: "03",
      t: "Fale no WhatsApp",
      d: "Mande sua dúvida, anexe o demonstrativo, peça o cálculo. A IA responde em segundos.",
    },
  ];
  return (
    <section id="como-funciona" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy md:text-4xl">
            Em 3 passos você ganha um especialista de plantão
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <span className="text-5xl font-extrabold text-brand-blue/20">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Calculator,
      t: "Cálculos de folha",
      d: "Rescisão, férias, 13º, horas extras, INSS, IRRF e adicionais com o passo a passo.",
    },
    {
      icon: Scale,
      t: "CLT e legislação",
      d: "Respostas embasadas em CLT, instruções normativas e convenções coletivas.",
    },
    {
      icon: FileText,
      t: "eSocial e obrigações",
      d: "Tira-dúvidas sobre eventos do eSocial, prazos, DCTFWeb e FGTS Digital.",
    },
    {
      icon: ShieldCheck,
      t: "Riscos trabalhistas",
      d: "Aponta riscos antes de fechar a folha e evita passivos para você e seu cliente.",
    },
    {
      icon: BookOpenCheck,
      t: "Roteiros prontos",
      d: "Modelos de comunicados, advertências, termos e cartas de aviso.",
    },
    {
      icon: MessageCircle,
      t: "Tudo no WhatsApp",
      d: "Sem novo app, sem login complicado. Você usa onde já está.",
    },
  ];
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Recursos
        </span>
        <h2 className="mt-3 text-3xl font-bold text-brand-navy md:text-4xl">
          Um Assessor pronto para tudo que cai na sua mesa
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:border-brand-blue/40 hover:shadow-brand"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-navy">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    {
      icon: Building2,
      t: "Escritórios de contabilidade",
      d: "Padronize as respostas da equipe e atenda mais clientes sem contratar mais analistas.",
    },
    {
      icon: HeartHandshake,
      t: "RH de PMEs",
      d: "Tenha um especialista de plantão para liberar o RH das dúvidas operacionais do dia.",
    },
    {
      icon: Zap,
      t: "DP público",
      d: "Apoio para servidores que cuidam de folha em prefeituras, autarquias e órgãos públicos.",
    },
  ];
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Para quem é
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Construído para quem vive o Departamento Pessoal
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Individual",
    cnpjs: 1,
    price: "39,90",
    desc: "Ideal para o profissional autônomo ou empresa única.",
    highlight: false,
  },
  {
    name: "Combo 3 CNPJs",
    cnpjs: 3,
    price: "99,90",
    desc: "Para escritórios em crescimento.",
    highlight: true,
    save: "Economize R$ 44/mês",
  },
  {
    name: "Combo 5 CNPJs",
    cnpjs: 5,
    price: "149,90",
    desc: "O queridinho das contabilidades.",
    highlight: false,
    save: "Economize R$ 88/mês",
  },
  {
    name: "Combo 10 CNPJs",
    cnpjs: 10,
    price: "299,90",
    desc: "Máxima escala para grandes carteiras.",
    highlight: false,
    save: "Economize R$ 273/mês",
  },
];

function Pricing() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Planos
        </span>
        <h2 className="mt-3 text-3xl font-bold text-brand-navy md:text-4xl">
          Escolha pelo número de CNPJs que você atende
        </h2>
        <p className="mt-4 text-muted-foreground">
          Assinatura mensal recorrente. Cancele quando quiser. Cada plano libera o uso simultâneo
          para o número de CNPJs contratado.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-2xl border bg-card p-7 transition ${
              p.highlight
                ? "border-brand-blue shadow-brand ring-1 ring-brand-blue/30"
                : "border-border hover:border-brand-blue/40"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
                Mais popular
              </span>
            )}
            <h3 className="text-base font-semibold text-brand-navy">{p.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-brand-navy">R$</span>
              <span className="text-4xl font-extrabold text-brand-navy">{p.price}</span>
              <span className="text-sm text-muted-foreground">/mês</span>
            </div>
            {p.save && <p className="mt-1 text-xs font-semibold text-brand-blue">{p.save}</p>}

            <ul className="mt-6 space-y-2.5 text-sm text-foreground">
              <Feat>
                Uso para{" "}
                <b>
                  {p.cnpjs} CNPJ{p.cnpjs > 1 ? "s" : ""}
                </b>
              </Feat>
              <Feat>Consultas ilimitadas via WhatsApp</Feat>
              <Feat>Cálculos de folha e rescisão</Feat>
              <Feat>Suporte a eSocial e legislação</Feat>
              <Feat>Atualizações automáticas</Feat>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                p.highlight
                  ? "bg-accent-gradient text-white shadow-brand hover:opacity-90"
                  : "bg-brand-navy text-primary-foreground hover:opacity-90"
              }`}
            >
              Assinar {p.name}
            </a>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
        Cada CNPJ deve ser previamente cadastrado. Não é permitido analisar CNPJs fora do plano
        contratado. O acesso é mantido enquanto a assinatura estiver ativa.
      </p>
    </section>
  );
}

function Feat({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-brand-blue/15 text-brand-blue">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Como funciona o atendimento via WhatsApp?",
      a: "Após a assinatura, você recebe o número oficial do Assessor do RH e já pode mandar perguntas, anexos e pedir cálculos. A IA responde em segundos, 24 horas por dia.",
    },
    {
      q: "Posso usar o mesmo plano para mais de um CNPJ?",
      a: "Só dentro do limite contratado. Cada CNPJ é previamente cadastrado e o uso para empresas fora do plano não é permitido. Para mais CNPJs, basta migrar para um combo maior.",
    },
    {
      q: "O Assessor substitui meu analista de DP?",
      a: "Não. Ele é um copiloto: acelera consultas, conferências e cálculos, padroniza respostas da equipe e reduz o risco de erros — mas a decisão final segue com você.",
    },
    {
      q: "As informações estão atualizadas com a legislação?",
      a: "Sim. Mantemos a base de conhecimento atualizada com CLT, instruções normativas, eSocial e mudanças relevantes para o DP.",
    },
    {
      q: "Posso cancelar quando quiser?",
      a: "Sim. A assinatura é mensal e pode ser cancelada a qualquer momento. Em caso de cancelamento ou inadimplência, o acesso é bloqueado.",
    },
    {
      q: "Servidores públicos podem usar?",
      a: "Sim. O Assessor do RH atende DP do setor privado e também servidores que cuidam de folha em prefeituras, autarquias e órgãos públicos.",
    },
  ];
  return (
    <section id="faq" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy md:text-4xl">
            Tudo o que você precisa saber
          </h2>
        </div>
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-brand-navy">
                {f.q}
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full border border-border text-brand-blue transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-10 text-white shadow-brand md:p-16">
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-gradient opacity-30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-accent-gradient opacity-20 blur-3xl"
          aria-hidden
        />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr,1fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Comece hoje a economizar horas todas as semanas
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Assine o Assessor do RH e descubra como é ter um especialista de DP respondendo na
              hora — direto no WhatsApp que você já usa.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#planos"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-brand transition hover:opacity-90 md:w-auto"
            >
              Ver planos e assinar
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 md:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com a gente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <Logo className="h-8" />
          <p className="mt-3 text-xs text-muted-foreground">
            IA para gestão de pessoas — feita para quem entende de DP.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-xs text-muted-foreground md:items-end">
          <span>© {new Date().getFullYear()} Assessor do RH. Todos os direitos reservados.</span>
          <span>contato@assessordorh.com.br</span>
        </div>
      </div>
    </footer>
  );
}
