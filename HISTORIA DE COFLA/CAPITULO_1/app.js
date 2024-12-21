dineroCofla = parseFloat(prompt('Cuanto dinero tiene Cofla: '));
dineroCamilo = parseFloat(prompt('Cuanto dinero tiene Camilo: '));
dineroSantiago = parseFloat(prompt('Cuanto dinero tiene Santiago: '));

if (dineroCofla >= 0.6 && dineroCofla <1){
    alert(`Cofla te alcanza para un helado de agua`);
    alert(`el resto de cofla es ${dineroCofla - 0.6}`);
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert(`Cofla te alcanza para un helado de crema`);
    alert(`el resto de cofla es ${dineroCofla - 1}`);
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert(`Cofla te alcanza para un helado de heladix`);
    alert(`el resto de cofla es ${dineroCofla - 1.6}`);
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert(`Cofla te alcanza para un helado de helardo`);
    alert(`el resto de cofla es ${dineroCofla - 1.7}`);
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert(`Cofla te alcanza para un helado de heladovich`);
    alert(`el resto de cofla es ${dineroCofla - 1.8}`);
}
else if (dineroCofla >= 2.9 ){
    alert(`Cofla te alcanza para un helado de confites o un pote de 1/4 kg`);
    alert(`el resto de cofla es ${dineroCofla - 2.9}`);
}
else{
    alert(`Cofla no te alcanza para ningun helado`);
}



if (dineroCamilo >= 0.6 && dineroCamilo <1){
    alert(`Camilo te alcanza para un helado de agua`);
}
else if (dineroCamilo >= 1 && dineroCamilo < 1.6){
    alert(`Camilo te alcanza para un helado de crema`);
}
else if (dineroCamilo >= 1.6 && dineroCamilo < 1.7){
    alert(`Camilo te alcanza para un helado de heladix`);
}
else if (dineroCamilo >= 1.7 && dineroCamilo < 1.8){
    alert(`Camilo te alcanza para un helado de helardo`);
}
else if (dineroCamilo >= 1.8 && dineroCamilo < 2.9){
    alert(`Camilo te alcanza para un helado de heladovich`);
}
else if (dineroCamilo >= 2.9 ){
    alert(`Camilo te alcanza para un helado de confites o un pote de 1/4 kg`);
}
else{
    alert(`Camilo no te alcanza para ningun helado`);
}


if (dineroSantiago >= 0.6 && dineroSantiago <1){
    alert(`Santiago te alcanza para un helado de agua`);
}
else if (dineroSantiago >= 1 && dineroSantiago < 1.6){
    alert(`Santiago te alcanza para un helado de crema`);
}
else if (dineroSantiago >= 1.6 && dineroSantiago < 1.7){
    alert(`Santiago te alcanza para un helado de heladix`);
}
else if (dineroSantiago >= 1.7 && dineroSantiago < 1.8){
    alert(`Santiago te alcanza para un helado de helardo`);
}
else if (dineroSantiago >= 1.8 && dineroSantiago < 2.9){
    alert(`Santiago te alcanza para un helado de heladovich`);
}
else if (dineroSantiago >= 2.9 ){
    alert(`Santiago te alcanza para un helado de confites o un pote de 1/4 kg`);
}
else{
    alert(`Santiago no te alcanza para ningun helado`);
}