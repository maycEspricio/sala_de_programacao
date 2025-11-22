"use client";

import React, { useState, ReactNode } from "react";
import { Home, User, Users, Settings, Menu, X } from "lucide-react";

export default function SidebarLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <aside
        className={`
          flex flex-col justify-between h-full border-r border-brand-300
          transition-all duration-300
          ${open ? "w-[12%]" : "w-[4%]"}
          fixed sm:relative z-50
          top-0 left-0 h-screen
          ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
          sm:translate-x-0
        `}
      >
        <nav className={`flex flex-col gap-6 p-4`}>
          <MenuItem icon={<Home size={28} />} label="Início" open={open} active={true} />
          <MenuItem icon={<Users />} label="Alunos" open={open} />
          <MenuItem icon={<Settings />} label="Configurações" open={open} />
        </nav>

        {/* Caixa do usuário */}
        {open && (
          <div className="flex items-center gap-3 p-3 m-4 bg-brand-100 rounded-xl">
            {/* Foto do usuário */}
            <div className="w-12 h-12 bg-brand-300 rounded-full flex justify-center items-center">
              <User size={24} className="text-white" />
            </div>

            {/* Nome e tipo do usuário */}
            <div className="flex flex-col">
              <span className="text-brand-950 font-semibold">NomeUsuario</span>
              <span className="text-brand-800 text-sm">TipoUsuario</span>
            </div>
          </div>
        )}
      </aside>

      <div className="flex flex-col w-[calc(100%-4%)] px-[2%] py-6">
        {/* BOTÃO */}
        <button
          onClick={() => setOpen(!open)}
          className="mb-4 cursor-pointer text-brand-900 hover:scale-110 transition self-start absolute top-4 left-4 sm:relative"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* CONTEÚDO */}
        <div className={`flex-1 flex flex-col px-4 py-6 transition-all duration-300
        `}>{children}</div>
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  label,
  open,
  active
}: {
  icon: ReactNode;
  label: string;
  open: boolean;
  active?: boolean;
}) {
  return (
    <div className={`flex items-center h-16 p-2 cursor-pointer ${active ? 'bg-brand-100 hover:bg-brand-200 rounded-lg' : 'hover:bg-brand-200 rounded-lg'}`}>
      <div className="flex justify-center items-center w-12 h-full">
        {icon}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "w-auto ml-2" : "w-0"
          }`}
      >
        <span className="text-brand-950 text-2xl whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}

