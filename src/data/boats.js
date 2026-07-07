// Fuente única de datos de embarcaciones
// Para agregar o editar modelos, modificá este archivo.

export const boats = [
  {
    id: 'panga-pro-22',
    name: 'Panga Pro 22',
    tagline: 'Rendimiento y estabilidad para el profesional exigente.',
    image: '/boat_model.png',
    images: [
      '/boat_model.png',
      '/hero_boat.png',
      '/shipyard.png',
    ],
    specs: {
      length: '22 pies',
      beam: '2.30 m',
      capacity: '8 personas',
      engine: '115 HP - 150 HP',
      hull: 'Fibra de vidrio',
      weight: '680 kg',
    },
    description: `La Panga Pro 22 está diseñada para los pescadores más exigentes y uso profesional en las aguas del Delta y el Río de la Plata. Su matriz de fibra de vidrio ofrece una estabilidad inigualable, incluso en aguas turbulentas.

Cuenta con amplio espacio de almacenamiento bajo cubierta, consola central ergonómica con parabrisas y porta objetos, y un casco en V profunda que garantiza un corte de ola suave y eficiente.

Cada unidad es fabricada artesanalmente en nuestro astillero en Tigre, con materiales de primera calidad y supervisión directa en cada etapa del proceso.`,
    features: [
      'Casco en V profunda de alto rendimiento',
      'Console central con parabrisas integrado',
      'Amplio espacio de almacenamiento',
      'Cubierta antideslizante de serie',
      'Disponible en múltiples colores',
      'Apta para motor fuera de borda',
    ],
    instagramLink: 'https://instagram.com/panga.arg',
  },
  {
    id: 'panga-sport-19',
    name: 'Panga Sport 19',
    tagline: 'Agilidad y diseño para disfrutar en familia.',
    image: '/boat_model.png',
    images: [
      '/boat_model.png',
      '/hero_boat.png',
    ],
    specs: {
      length: '19 pies',
      beam: '2.10 m',
      capacity: '6 personas',
      engine: '90 HP - 115 HP',
      hull: 'Fibra de vidrio',
      weight: '520 kg',
    },
    description: `Ideal para salidas recreativas familiares o deportes acuáticos en el Delta del Paraná. La Panga Sport 19 combina agilidad, facilidad de maniobrabilidad y un consumo de combustible muy eficiente.

Su casco en V profunda asegura un corte de ola suave y una conducción estable incluso a alta velocidad. La distribución interior está pensada para el máximo confort de todos los pasajeros.

Con un peso reducido, es fácil de transportar en tráiler y perfecta para explorar los rincones más escondidos del Delta.`,
    features: [
      'Diseño compacto y liviano',
      'Interior espacioso para 6 personas',
      'Fácil transporte en tráiler',
      'Bajo consumo de combustible',
      'Ideal para deporte y recreación',
      'Mantenimiento sencillo',
    ],
    instagramLink: 'https://instagram.com/panga.arg',
  },
  {
    id: 'panga-matrix-25',
    name: 'Panga Matrix 25',
    tagline: 'Nuestra insignia: máximo porte y lujo en cada detalle.',
    image: '/boat_model.png',
    images: [
      '/boat_model.png',
      '/hero_boat.png',
      '/shipyard.png',
    ],
    specs: {
      length: '25 pies',
      beam: '2.60 m',
      capacity: '10 personas',
      engine: '150 HP - 200 HP',
      hull: 'Fibra de vidrio reforzada',
      weight: '950 kg',
    },
    description: `Nuestra embarcación insignia. La Panga Matrix 25 combina un gran porte con acabados de lujo y la robustez estructural que solo se logra con décadas de experiencia en la construcción naval.

Perfecta para expediciones largas, transporte de pasajeros o simplemente disfrutar del Delta con la máxima comodidad. Su estructura de fibra de vidrio reforzada garantiza una vida útil excepcional con mínimo mantenimiento.

Cada Matrix 25 se entrega con inspección de Prefectura Naval Argentina y documentación completa para su matriculación.`,
    features: [
      'Fibra de vidrio reforzada',
      'Capacidad para 10 personas',
      'Consola doble con GPS integrable',
      'Canastilla de proa de serie',
      'Bomba de sentina eléctrica',
      'Documentación completa para PNA',
    ],
    instagramLink: 'https://instagram.com/panga.arg',
  },
];
