import React from "react";
import "./MatCartillas.css";
import { Box, Typography } from "@mui/material";
import DocumentCard from "../../DocumentCard/DocumentCard";

const MatCartillas = () => {
  return (
    <Box mb={10}>
      <Typography fontFamily='Open Sans' variant="h6" color='#575756' marginX='50px' marginTop='70px' marginBottom='20px'>
        Para la sección de materiales: A continuación, encontrarás las
        herramientas necesarias para poder construir los libros físicos del
        programa de Orientación Socio Ocupacional que deben reposar en las
        Instituciones de Educación, recuerda que desde Fundación Corona
        sugerimos que sean tres libros por cada Institución.
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <DocumentCard
          img="images/folderPortada.png"
          title="Folder de portadas"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F0%20_FOLDER_PORTADAS_TODO.pdf?alt=media&token=3ec189a2-f5b6-4ea9-9ae3-909e92f90ba4"
        ></DocumentCard>
        <DocumentCard
          img="images/lBase.png"
          title="Portada marco general"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F1%20_%20PORTADA%20MARCO%20GENERAL.pdf?alt=media&token=1b577e9d-d1f8-4f52-9b6d-2ea005d65a38"
        ></DocumentCard>
        <DocumentCard
          img="images/guia.png"
          title="Portada noveno"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F2%20_%20PORTADA%20NOVENO.pdf?alt=media&token=0f837137-ad1a-489b-ace8-5bda5ce36b31"
        ></DocumentCard>
        <DocumentCard
          img="images/folderPortada.png"
          title="Separadores noveno"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F2.1%20_%20SEPARADORES_NOVENO.pdf?alt=media&token=6184698f-070d-46ac-8aa2-6a3414428ffa"
        ></DocumentCard>
        <DocumentCard
          img="images/encuesta.png"
          title="Portada décimo"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F3%20_%20PORTADA%20DECIMO.pdf?alt=media&token=3b14f4fe-0c01-4fd2-a203-c5490320ec7d"
        ></DocumentCard>
        <DocumentCard
          img="images/separadorD.png"
          title="Separadores décimo"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F3.1%20_%20SEPARADOR%20DECIMO.pdf?alt=media&token=73d46513-78aa-452e-bdc8-31b319bc190f"
        ></DocumentCard>
        <DocumentCard
          img="images/seguimiento.png"
          title="Portada once"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F4%20_%20PORTADa%20ONCE.pdf?alt=media&token=b80503ce-92bf-4b99-99d5-4dc2b83169a0"
        ></DocumentCard>
        <DocumentCard
          img="images/encuesta.png"
          title="Separadores once"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F4_1%20SEPARADOR%20ONCE.pdf?alt=media&token=0b1c9978-a2c1-4921-a63f-346b94682e3d"
        ></DocumentCard>
        <DocumentCard
          img="images/portada.png"
          title="Portada y contraportada"
          link="https://firebasestorage.googleapis.com/v0/b/f-corona-oso.appspot.com/o/Insumos%20para%20impresion%2F5%20_%20PORTADA%20Y%20CONTRAPORTADA.pdf?alt=media&token=c1222815-87d0-4427-9eba-36539dbc9d19"
        ></DocumentCard>
      </Box>
    </Box>
  );
};

export default MatCartillas;
