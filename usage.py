import dash_mui
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    dash_mui.Button(id="button", children="Hello World", variant="outlined"),
    html.Div(id="output")
])

@app.callback(
    Output("output", "children"),
    Input("button", "n_clicks")
)
def on_click(n_clicks):
    return f"Button clicked {n_clicks} times"

if __name__ == '__main__':
    app.run_server(debug=True)
