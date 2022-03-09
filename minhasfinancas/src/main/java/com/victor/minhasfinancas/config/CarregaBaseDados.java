package com.victor.minhasfinancas.config;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.victor.minhasfinancas.api.dto.LancamentoDTO;
import com.victor.minhasfinancas.model.entity.Lancamento;
import com.victor.minhasfinancas.model.entity.Usuario;
import com.victor.minhasfinancas.model.enums.StatusLancamento;
import com.victor.minhasfinancas.model.enums.TipoLancamento;
import com.victor.minhasfinancas.model.repository.LancamentoRepository;
import com.victor.minhasfinancas.model.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("test")
public class CarregaBaseDados {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private LancamentoRepository lancamentoRepository;

    @Bean
    CommandLineRunner executar() {

        return args -> {

            Usuario usuario = Usuario.builder().nome("victor").email("victor@gmail.com").senha("1234").build();

            Lancamento lancamento = new Lancamento(2, 2022, "pensao", usuario, BigDecimal.valueOf(300),
                    TipoLancamento.DESPESA, StatusLancamento.PENDENTE);

            usuarioRepository.save(usuario);
            lancamentoRepository.save(lancamento);

        };

    }

}
