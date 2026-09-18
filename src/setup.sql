CREATE TABLE organization (
organization_id SERIAL PRIMARY KEY,
name VARCHAR(150) NOT NULL,
description TEXT NOT NULL,
contact_email VARCHAR(255) NOT NULL,
logo_filename VARCHAR(255) NOT NULL
);

INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', 'brightfuture-logo.png'),
('GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png'),
('UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', 'hello@unityserve.org', 'unityserve-logo.png');

CREATE TABLE service_project (
    project_id SERIAL PRIMARY KEY,
    organization_id INT NOT NULL REFERENCES organization(organization_id),
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(150) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO service_project (organization_id, title, description, location, date)
VALUES
-- BrightFuture Builders (organization_id = 1)
(1, 'Community Park Renovation', 'Renovating local park facilities.', 'Central Park', '2026-10-01'),
(1, 'School Building Repair', 'Repairing classrooms and roofs.', 'Lincoln School', '2026-10-15'),
(1, 'Bridge Safety Inspection', 'Inspecting and reinforcing community bridges.', 'River Crossing', '2026-10-25'),
(1, 'Playground Construction', 'Building a new playground for children.', 'Sunset Park', '2026-11-05'),
(1, 'Community Center Upgrade', 'Improving accessibility and energy efficiency.', 'Downtown Center', '2026-11-20'),

-- GreenHarvest Growers (organization_id = 2)
(2, 'Urban Garden Expansion', 'Expanding community gardens.', 'Downtown Garden', '2026-11-05'),
(2, 'Food Sustainability Workshop', 'Teaching sustainable farming.', 'Community Center', '2026-11-20'),
(2, 'Composting Initiative', 'Launching composting programs for households.', 'GreenHub Facility', '2026-12-01'),
(2, 'Seed Distribution Drive', 'Providing free seeds to local families.', 'Farmers Market', '2026-12-10'),
(2, 'Hydroponics Training', 'Training volunteers in hydroponic farming.', 'Innovation Lab', '2026-12-20'),

-- UnityServe Volunteers (organization_id = 3)
(3, 'Volunteer Fair', 'Connecting volunteers with charities.', 'City Hall', '2026-12-01'),
(3, 'Beach Cleanup Day', 'Organizing a cleanup event at the local beach.', 'Sunrise Beach', '2026-12-10'),
(3, 'Holiday Food Drive', 'Collecting food donations for families in need.', 'Community Warehouse', '2026-12-15'),
(3, 'Senior Home Visits', 'Visiting senior citizens and providing companionship.', 'Golden Age Home', '2026-12-20'),
(3, 'Blood Donation Campaign', 'Encouraging blood donations for hospitals.', 'Health Center', '2026-12-30');

-- Tabla de categorías
CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabla intermedia para la relación muchos a muchos
CREATE TABLE project_category (
    project_id INT NOT NULL REFERENCES service_project(project_id),
    category_id INT NOT NULL REFERENCES category(category_id),
    PRIMARY KEY (project_id, category_id)
);

-- Insertar categorías de ejemplo
INSERT INTO category (name) VALUES
('Community Development'),
('Environmental Sustainability'),
('Volunteer Support');

-- Asociar proyectos con categorías
INSERT INTO public.project_category (project_id, category_id) -- Guardará las parejas.
SELECT p.project_id, c.category_id -- Obtiene los identificadores existentes.
FROM public.service_project AS p -- Llama “p” a la tabla de proyectos.
JOIN public.organization AS o ON o.organization_id = p.organization_id -- Encuentra la organización de cada proyecto.
JOIN public.category AS c ON c.name = -- Busca la categoría por su nombre.
    CASE o.name -- Elige el nombre de categoría según la organización.
        WHEN 'BrightFuture Builders' THEN 'Community Development' -- Categoría de sus proyectos.
        WHEN 'GreenHarvest Growers' THEN 'Environmental Sustainability' -- Categoría de sus proyectos.
        WHEN 'UnityServe Volunteers' THEN 'Volunteer Support' -- Categoría de sus proyectos.
    END -- Termina la elección.
ON CONFLICT (project_id, category_id) DO NOTHING; -- Omite parejas que ya estaban guardadas.
