import React from "react";
import { Container } from "../../styles/common.style";
import { ContainerMap, MapBox, MapIfreme } from "./map.style";

const Map = () => {
    return(
        <div>
          <Container>
            <ContainerMap>
                <MapBox>
                <MapIfreme src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1321.8154925947924!2d-36.058354013688664!3d-9.010149443271251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1710782255717!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></MapIfreme>
                </MapBox>
            </ContainerMap>
        </Container>
        </div>
    )
}

export default Map