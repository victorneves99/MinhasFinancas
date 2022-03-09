package com.victor.minhasfinancas.config;

import com.victor.minhasfinancas.model.entity.Lancamento;
import com.victor.minhasfinancas.model.entity.Usuario;
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

            usuarioRepository.save(usuario);

        };

    }

}
