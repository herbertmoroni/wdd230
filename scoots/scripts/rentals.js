document.addEventListener('DOMContentLoaded', function() {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            const rentalsContainer = document.getElementById('rentals-container');
            data.forEach(rental => {
                const rentalCard = document.createElement('div');
                rentalCard.className = 'rental-card';

                rentalCard.innerHTML = `
                    <img src="images/${rental.image}" alt="${rental.alt}">
                    <h3>${rental.type}</h3>
                    <p>Capacity: ${rental.capacity} person(s)</p>
                    <table>
                        <tr>
                            <th>Reservation</th>
                            <th>Walk-In</th>
                        </tr>
                        <tr>
                            <td>Half Day: $${rental.halfDay}</td>
                            <td>Half Day: $${rental.walkInHalfDay}</td>
                        </tr>
                        <tr>
                            <td>Full Day: $${rental.fullDay}</td>
                            <td>Full Day: $${rental.walkInFullDay}</td>
                        </tr>
                    </table>
                `;

                rentalsContainer.appendChild(rentalCard);
            });
        })
        .catch(error => console.error('Error fetching rental data:', error));
});
