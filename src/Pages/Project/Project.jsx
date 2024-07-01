import React from "react";
import styles from "./Project.module.css";
function Project() {
    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>Nosso projeto</h1>
            <p>
                Bem-vindo à página do nosso projeto desenvolvido para a
                disciplina de <strong>Introdução ao Elasticsearch</strong> na
                Universidade Federal de Alfenas. Este projeto foi realizado
                pelos alunos <strong> Ryan Rodrigues</strong> e{" "}
                <strong>Daniel da Costa Lima</strong>, com o objetivo de
                explorar e demonstrar a aplicação prática das tecnologias de
                busca e indexação fornecidas pelo Elasticsearch.
            </p>
            <h2 className={styles.subtitulo}>Tecnologias Utilizadas</h2>
            <p>
                Para o desenvolvimento deste projeto, utilizamos uma stack de
                tecnologias moderna e eficiente:
            </p>
            <ul>
                <li>
                    <strong>Front-end:</strong> A interface de usuário foi
                    desenvolvida em React.js, garantindo uma experiência de
                    usuário interativa e responsiva.
                </li>
                <li>
                    <strong>Back-end:</strong> O back-end foi implementado em
                    Java, proporcionando uma robusta integração com o
                    Elasticsearch.
                </li>
                <li>
                    <strong>Integração:</strong> A comunicação entre nosso
                    back-end em Java e o Elasticsearch é feita através de
                    contêineres Docker, facilitando o gerenciamento e a
                    escalabilidade do projeto.
                </li>
            </ul>
            <h2 className={styles.subtitulo}>Funcionalidades Implementadas</h2>
            <p>
                Nosso projeto possui diversas funcionalidades que demonstram o
                poder e a flexibilidade do Elasticsearch:
            </p>
            <ul>
                <li>
                    <strong>Filtros por Período de Tempo e Leitura: </strong>
                    Implementamos filtros que permitem ao usuário restringir os
                    resultados da busca com base em um período de tempo
                    específico ou na duração da leitura, com opções de ordenação
                    tanto crescente quanto decrescente.
                </li>
                <li>
                    <strong>Consulta de Match Phrase:</strong> Esta
                    funcionalidade permite ao usuário realizar buscas por frases
                    exatas, aumentando a precisão dos resultados retornados pelo
                    Elasticsearch.
                </li>
                <li>
                    <strong>Paginação:</strong> Tanto no front-end quanto no
                    back-end, implementamos paginação para melhorar a
                    navegabilidade e a eficiência na apresentação dos resultados
                    da busca.
                </li>
                <li>
                    <strong>UX/UI Agradável:</strong> O design da interface foi
                    cuidadosamente elaborado para proporcionar uma experiência
                    de usuário agradável e intuitiva.
                </li>
            </ul>
            <h2 className={styles.subtitulo}>Objetivos do Projeto</h2>
            <p>
                O principal objetivo deste projeto foi explorar e aplicar
                conceitos de Elassticsearch em um ambiente prático. Buscamos
                desenvolver uma aplicação que não apenas demonstrasse a
                integração eficaz entre Java, React.js e Elasticsearch, mas que
                também proporcionasse uma experiência de usuário rica e
                responsiva. Através deste projeto, buscamos:
            </p>
            <ul>
                <li>
                    Demonstrar a capacidade de Elasticsearch em lidar com
                    grandes volumes de dados.{" "}
                </li>
                <li>
                    Implementar funcionalidades de pesquisa avançada com filtros
                    e ordenação.{" "}
                </li>
                <li>
                    Criar uma interface intuitiva que melhore a experiência do
                    usuário na interação com os dados.
                </li>
            </ul>
            <h2 className={styles.subtitulo}>Repositórios</h2>
            <p>
                Os repositórios do projeto estão disponíveis no GitHub. Você
                pode acessar os códigos fonte do back-end e do front-end nos
                seguintes links:
            </p>
            <ul>
              <li><a href="https://github.com/DanCLima/ElasticSearch">Repositório do Back-end </a></li>
              <li><a href="https://github.com/ryanpanta/elasticsearch-app">Repositório do Front-end</a></li>
            </ul>
            
        </section>
    );
}

export default Project;
