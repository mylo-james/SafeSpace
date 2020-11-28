from . import (auth_routes, user_routes, survey_routes)

# Import all bp for easier importing
routes = [auth_routes.bp, user_routes.bp, survey_routes.bp]
