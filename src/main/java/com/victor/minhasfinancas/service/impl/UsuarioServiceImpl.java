package com.victor.minhasfinancas.service.impl;

import java.util.Optional;

import com.victor.minhasfinancas.exception.ErroAutenticacao;
import com.victor.minhasfinancas.exception.RegraNegocioException;
import com.victor.minhasfinancas.model.entity.Usuario;
import com.victor.minhasfinancas.model.repository.UsuarioRepository;
import com.victor.minhasfinancas.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Override
    public Usuario autenticar(String email, String senha) {

        Optional<Usuario> usuario = repository.findByEmail(email);

        if (!usuario.isPresent()) {
            throw new ErroAutenticacao("Usuario não encontrado para o email informado.");
        }

        if (!usuario.get().getSenha().equals(senha)) {
            throw new ErroAutenticacao("Senha invalida.");
        }

        return usuario.get();
    }

    @Override
    public Usuario salvarUsuario(Usuario usuario) {

        validarEmail(usuario.getEmail());

        return repository.save(usuario);
    }

    @Override
    public void validarEmail(String email) {

        boolean existe = repository.existsByEmail(email);

        if (existe) {
            throw new RegraNegocioException("Já existe um usuario cadastrado com esse email.");
        }

    }

}
