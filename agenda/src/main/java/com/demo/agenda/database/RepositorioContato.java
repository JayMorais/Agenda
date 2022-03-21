package com.demo.agenda.database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.agenda.entidade.Contato;
//Métodos para manipular o contato

public interface RepositorioContato extends JpaRepository<Contato, Long>{
}
