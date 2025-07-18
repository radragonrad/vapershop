<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="/images/logo-savapers.png" alt="Savapers Logo" height="30" class="d-inline-block align-text-top me-2" />          
        </a>

        <!-- Menú desplegable (opcional) -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menú principal -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

        <!-- Contenido principal -->
    <main class="flex-grow-1 py-5">
      <div class="container">
        <!-- Título -->
        <h1 class="mb-4">Productos destacados</h1>

        <!-- Mensaje de cantidad de productos -->
        <p class="mb-4">
          Mostrando 1-10 de 373 artículos
        </p>

        <!-- Grilla de productos -->
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <!-- Producto 1 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x300?text=Producto+1" class="card-img-top" alt="Producto 1">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Mango</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>

          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>

          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>

          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>


          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>

          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>


          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>
          <!-- Producto 2 -->
          <div class="col">
            <div class="card h-100 shadow-sm">
              <img src=" https://via.placeholder.com/300x300?text=Producto+2" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <small class="badge bg-danger text-white mb-2">NUEVO</small>
                <h5 class="card-title">Vaper Desechable Pasión Fruta</h5>
                <p class="card-text">
                  Aroma King<br>
                  4,50€ <del>9,00€</del>
                </p>
                <select class="form-select mb-2">
                  <option selected>20MG / 2ML</option>
                  <option value="1">Opción 1</option>
                  <option value="2">Opción 2</option>
                  <option value="3">Opción 3</option>
                </select>
                <button class="btn btn-primary w-100">Añadir al carrito</button>
              </div>
            </div>
          </div>

          <!-- Repite este patrón para más productos -->
          <!-- ... -->

        </div>

        <!-- Paginación -->
        <nav aria-label="Page navigation example" class="mt-4">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&laquo;</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item"><a class="page-link" href="#">16</a></li>
            <li class="page-item">
              <a class="page-link" href="">&raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>

    <!-- Pie de página -->
    <footer class="bg-dark text-white text-center p-3 mt-auto">
      <div class="container">
        <p class="mb-0">© 2025 Savapers - Todos los derechos reservados</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Simulación de productos
const products = [
  {
    id: 1,
    name: 'Vaper Desechable Mango',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+1',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 2,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 3,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 4,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 5,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 6,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 7,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 8,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 9,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 10,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 11,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 12,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 13,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  {
    id: 14,
    name: 'Vaper Desechable Pasión Fruta',
    price: 4.50,
    oldPrice: 9.00,
    image: ' https://via.placeholder.com/300x300?text=Producto+2',
    brand: 'Aroma King',
    discount: true,
  },
  // Agrega más productos aquí...
];

// Lógica adicional si es necesaria
</script>