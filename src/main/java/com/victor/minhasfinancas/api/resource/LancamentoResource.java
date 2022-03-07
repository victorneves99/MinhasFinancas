package com.victor.minhasfinancas.api.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import com.victor.minhasfinancas.api.dto.AtualizaStatusDTO;
import com.victor.minhasfinancas.api.dto.LancamentoDTO;
import com.victor.minhasfinancas.exception.ErroAutenticacao;
import com.victor.minhasfinancas.exception.RegraNegocioException;
import com.victor.minhasfinancas.model.entity.Lancamento;
import com.victor.minhasfinancas.model.entity.Usuario;
import com.victor.minhasfinancas.model.enums.StatusLancamento;
import com.victor.minhasfinancas.model.enums.TipoLancamento;
import com.victor.minhasfinancas.service.LancamentoService;
import com.victor.minhasfinancas.service.UsuarioService;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lancamentos")
public class LancamentoResource {

    @Autowired
    private LancamentoService service;
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping()
    public ResponseEntity salvar(@RequestBody LancamentoDTO dto) {

        try {
            Lancamento entidade = converter(dto);
            entidade = service.salvar(entidade);
            return new ResponseEntity<>(entidade, HttpStatus.CREATED);
        } catch (RegraNegocioException e) {

            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @PutMapping("{id}")
    public ResponseEntity atualizar(@PathVariable("id") Long id, @RequestBody LancamentoDTO dto) {

        return service.obterPorId(id).map(entity -> {

            try {
                Lancamento lancamento = converter(dto);
                lancamento.setId(entity.getId());
                service.atualizar(lancamento);
                return ResponseEntity.ok(lancamento);
            } catch (RegraNegocioException e) {

                return ResponseEntity.badRequest().body(e.getMessage());
            }

        }).orElseGet(() -> new ResponseEntity("Lancamento nçao encontrado na base de dados", HttpStatus.BAD_REQUEST));

    }

    @PutMapping("{id}/atualiza-status")
    public ResponseEntity atualizarStatus(@PathVariable("id") Long id, @RequestBody AtualizaStatusDTO dto) {

        return service.obterPorId(id).map(entidade -> {

            StatusLancamento statusSelecionado = StatusLancamento.valueOf(dto.getStatus());

            if (statusSelecionado == null) {
                return ResponseEntity.badRequest()
                        .body("Não foi possivel atualizar o status do lançamento , envie um status valido .");
            }

            try {
                entidade.setStatus(statusSelecionado);
                service.atualizar(entidade);
                return ResponseEntity.ok(entidade);

            } catch (RegraNegocioException e) {

                return ResponseEntity.badRequest().body(e.getMessage());

            }

        }).orElseGet(() -> new ResponseEntity("Lancamento não encontrado na base de Dados.", HttpStatus.BAD_REQUEST));

    }

    @DeleteMapping("{id}")
    public ResponseEntity deletar(@PathVariable("id") Long id) {

        return service.obterPorId(id).map(entidade -> {

            service.deletar(entidade);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }).orElseGet(() -> new ResponseEntity("Lancamento nçao encontrado na base de dados", HttpStatus.BAD_REQUEST));

    }

    @GetMapping
    public ResponseEntity buscar(@RequestParam(value = "descricao", required = false) String descricao,
            @RequestParam(value = "mes", required = false) Integer mes,
            @RequestParam(value = "ano", required = false) Integer ano, @RequestParam("usuario") Long idUsuario) {

        Lancamento lancamentoFiltro = new Lancamento();
        lancamentoFiltro.setDescricao(descricao);
        lancamentoFiltro.setMes(mes);
        lancamentoFiltro.setAno(ano);
        Optional<Usuario> usuario = usuarioService.obterPorId(idUsuario);
        if (!usuario.isPresent()) {
            return ResponseEntity.badRequest().body("Nao foi possivel realizar a consulta,  Usuario nao encontrado");
        } else {
            lancamentoFiltro.setUsuario(usuario.get());
        }

        List<Lancamento> lancamentos = service.buscar(lancamentoFiltro);
        return ResponseEntity.ok(lancamentos);

    }

    private Lancamento converter(LancamentoDTO dto) {

        Lancamento lancamento = new Lancamento();

        lancamento.setId(dto.getId());
        lancamento.setDescricao(dto.getDescricao());
        lancamento.setAno(dto.getAno());
        lancamento.setMes(dto.getMes());
        lancamento.setValor(dto.getValor());

        Usuario usuario = usuarioService.obterPorId(dto.getUsuario())
                .orElseThrow(() -> new RegraNegocioException("Usuario não encontrado!"));

        lancamento.setUsuario(usuario);

        if (dto.getTipo() != null) {
            lancamento.setTipo(TipoLancamento.valueOf(dto.getTipo()));
        }

        if (dto.getStatus() != null) {
            lancamento.setStatus(StatusLancamento.valueOf(dto.getStatus()));
        }

        return lancamento;

    }

}
