package com.victor.minhasfinancas.model.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.victor.minhasfinancas.model.enums.StatusLancamento;
import com.victor.minhasfinancas.model.enums.TipoLancamento;

import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "lancamento", schema = "financas")
public class Lancamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "mes")
    private Integer mes;

    @Column(name = "ano")
    private Integer ano;

    @Column(name = "descricao")
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @Column(name = "valor")
    private BigDecimal valor;

    @Column(name = "data_cadastro")
    @Convert(converter = Jsr310JpaConverters.LocalDateConverter.class)
    private LocalDate dataCadastro;

    @Column(name = "tipo")
    @Enumerated(value = EnumType.STRING)
    private TipoLancamento tipo;

    @Column(name = "status")
    @Enumerated(value = EnumType.STRING)
    private StatusLancamento status;

    public Lancamento(Integer mes, Integer ano, String descricao, Usuario usuario, BigDecimal valor,
            TipoLancamento tipo) {
        this.mes = mes;
        this.ano = ano;
        this.descricao = descricao;
        this.usuario = usuario;
        this.valor = valor;
        this.tipo = tipo;

    }

    public Lancamento(Integer mes, Integer ano, String descricao, Usuario usuario, BigDecimal valor,
            TipoLancamento tipo, StatusLancamento status) {
        this.mes = mes;
        this.ano = ano;
        this.descricao = descricao;
        this.usuario = usuario;
        this.valor = valor;
        this.tipo = tipo;
        this.status = status;
    }

}
