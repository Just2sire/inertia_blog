function formatDate(dateString) {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois sont indexés à partir de zéro, donc on ajoute 1
    const year = date.getFullYear();
    
    // Ajout des zéros devant le jour et le mois si nécessaire
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    
    // Format final : Day/Month/Year
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    
    return formattedDate;
  }
 
export default formatDate;