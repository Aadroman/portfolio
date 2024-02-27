<script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
        return {
			skillsHeading: 'L\'évolution de mes compétences au seins de l\'IUT',
        }


    },
    mounted() {
      var ctx = document.getElementById("polarChart").getContext('2d');
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: [
            "Réaliser un développement d'application",
            "Optimiser des applications informatiques",
            "Administrer des systèmes informatiques communicants complexes",
            "Gérer des données de l'information",
            "Conduire un projet",
            "Travailler dans une équipe informatique",
          ],
          datasets: [{
            backgroundColor: [
              "#2ecc71",
              "#3498db",
              "#95a5a6",
              "#9b59b6",
              "#f1c40f",
              "#e74c3c",
              "#34495e"
            ],
            data: [85, 80, 80, 85, 90, 95]
          }]
        },
        options: {
            responsive: true,
          plugins: {
            legend: {
              position: 'right', // Positionner les étiquettes à droite
              labels: {
                font: {
                        size: 18
                    } 
                },
            },
          },
        },
      });
    },
  };
</script>
<template>
    <div class="mt-10 sm:mt-20 mx-auto">
      <div class="mb-2 sm:mb-0  mx-auto">
        <p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ skillsHeading }}
		</p>
        <canvas id="polarChart" style="height: 300px;"></canvas>
      </div>
    </div>
</template>