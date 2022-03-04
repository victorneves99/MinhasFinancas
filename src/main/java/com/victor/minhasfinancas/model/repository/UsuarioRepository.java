package com.victor.minhasfinancas.model.repository;


import java.util.Optional;

import com.victor.minhasfinancas.model.entity.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    
    Optional<Usuario> findByEmail(String email);

    boolean existsByEmail(String email);

}
