import { Navigation } from "@/components/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const markdown = `
# És aluno do Departamento de Informática?

## Queres ganhar um Monitor de Gaming de 24,5"?!?

Faz upload do teu CV, no site dos **50 Anos**, torna-o disponível para os nossos patrocinadores e habilita-te a este prémio incrível!

### 🎁 O prémio

**Monitor de Gaming de 24,5" MSI G255F**

### 📄 Onde podes submeter o CV?

<https://forms.gle/c9L5TRTsAGuLRwgP8>

### 📅 Até quando?

**22 de julho de 2026**

## 🎲 Sorteio do prémio

O sorteio será baseado no resultado do **1.º prémio da extração da Lotaria Popular de 23 de julho de 2026**.

Após a validação, todas as submissões receberão um número sequencial. Caso o número premiado da lotaria seja superior ao total de participantes, será executado um algoritmo (em ciclo) até ser encontrado o número vencedor correspondente.

O premiado será anunciado no **dia 24 de julho de 2026**.
`;

export default function EventoPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">

        <div className="bg-white border rounded-xl p-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-5xl font-bold text-[#EB5F0A] mb-6">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold text-[#EB5F0A] mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-semibold text-[#EB5F0A] mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[#EB5F0A] mb-4 leading-relaxed">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-bold">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 text-[#EB5F0A] mb-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 text-[#EB5F0A] mb-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="mb-1">
                  {children}
                </li>
              ),
              a: ({ ...props }) => (
                <a
                  {...props}
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
