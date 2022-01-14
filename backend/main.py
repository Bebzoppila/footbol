from flask import Flask, jsonify
from flask_cors import CORS
from data_base import sql_request, create_sql
from flask_restful import Resource, Api, request
app = Flask(__name__)
CORS(app)
api = Api(app)


class HelloWorld(Resource):
    def get(self):
        limit = request.args.get('limit')
        fields_names = ('scoreFtHome', 'scoreFtAway', 'date', 'tourNumber','stadium', 'teamHome', 'teamAway', 'teamHomeImg', 'teamAwayImg',)
        if not limit:
            limit = 10
        all_matches = sql_request(create_sql(limit))
        result = [{field: match[indx] for indx,field in enumerate(fields_names)} for match in all_matches ]
        return jsonify(result)


api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(debug=True)