import pymysql
def sql_request(sqlText: str) -> list:
    try:
        result = []
        con = pymysql.connect(host='141.8.193.236', user='f0591940_pharmacy',
                              password='Zrhenjq12', database='f0591940_pharmacy')
        with con.cursor() as cursor:
            cursor.execute(sqlText)
            result = cursor.fetchall()
        return result
    except Exception as Errror:
        print(Errror)
    finally:
        con.close()


def create_sql(limit: int = 10) -> str:
    return f"""
        SELECT game.scoreFtHome, game.scoreFtAway, game.date, game.tourNumber, game.stadium,
        (SELECT name FROM team WHERE game.teamHome = team.id), 
        (SELECT name FROM team WHERE game.teamAway = team.id),
        (SELECT img FROM team WHERE game.teamHome = team.id), 
        (SELECT img FROM team WHERE game.teamAway = team.id)
            FROM game 
        LIMIT {limit}
    """
