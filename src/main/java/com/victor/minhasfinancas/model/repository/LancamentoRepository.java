package com.victor.minhasfinancas.model.repository;

import com.victor.minhasfinancas.model.entity.Lancamento;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LancamentoRepository  extends JpaRepository<Lancamento,Long> {
    
}
