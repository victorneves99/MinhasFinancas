package com.victor.minhasfinancas.api.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LancamentoDTO {

    private Long id;

    private Integer mes;

    private Integer ano;

    private String descricao;

    private Long usuario;

    private BigDecimal valor;

    private String tipo;

    private String status;

    public LancamentoDTO(Integer mes, Integer ano, String descricao, Long usuario, BigDecimal valor, String tipo) {
        this.mes = mes;
        this.ano = ano;
        this.descricao = descricao;
        this.usuario = usuario;
        this.valor = valor;
        this.tipo = tipo;
    }

}
