/* Cette fonction prend en paramètre toutes les ombres */
export default function getBoxShadowValue(shadows) {
    let finalString = ""
    /* On parcourt les tableau des ombres */
    shadows.forEach(shadow => {
        /* Seulement si l'ombre est active, on va parcourir ses inputs */
        if(shadow.active){
            shadow.inputs.forEach(input => {
                if(input.type === "range"){
                    finalString += `${input.value}px `
                }
                else if(input.type === "color"){
                    finalString += `${input.value}`
                }
            })
            /* Si le checkbox Inset est coché */
            if(shadow.inset){
                finalString += " inset"
            }
            /* On vérifie si on est à la dernière ombre pour ajouter ; à la fin */
            if(shadows.indexOf(shadow) === shadows.length - 1){
                finalString += ";"
            }
            /* Si c'est pas la dernière ombre on met , et on continue le parcours pour récupérer les valeurs de la prochaine ombre */
            else {
                finalString += ","
            }
        }
    })
    return finalString
}