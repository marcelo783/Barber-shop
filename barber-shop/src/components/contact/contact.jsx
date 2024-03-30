import React from "react";
import { Container, SectionsContact } from "../../styles/common.style";
import { H1, H2, Pa } from "../../styles/Typography.style";
import { IconContainer, WhatsappIcon, InstagramIcon } from "../header/Header.style";
import { ContactCard, ContactGrid } from "./contact.style";


const Contact = () => {
    return(
        <div>
            <Container>
            <H1  id="contato">Contato</H1>
                <SectionsContact>

                    <ContactGrid>
                        <ContactCard>
                            <H2>Endereço</H2>
                            <Pa>
                            Rua: Rua Fournier, 81<br />
                            Cidade: Novo porto<br />
                            Estado: Connecticut<br />
                            CEP: 6511<br />
                            Telefone: (82) 946-8110
                            </Pa>
                        </ContactCard>
                    </ContactGrid>

                    <ContactGrid>
                        <ContactCard>
                            <H2>Horários</H2>
                            <Pa>
                        Segunda a Sexta - 09h a 22h<br />
                        Sábado - 09h a 20hs<br />
                        ​Domingo - 10h a 16h </Pa>
                        </ContactCard>
                    </ContactGrid>

                
                </SectionsContact>
            </Container>
        </div>
    )
};

export default Contact;