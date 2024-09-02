# from fastapi import FastAPI, Form

# app = FastAPI()

# @app.get('/')
# def read_root():
#     return {'Ping': 'Pong'}

# @app.get('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):
#     return {'status': 'parsed'}
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


# Define a Pydantic model for the data structure
class PipelineData(BaseModel):
    nodes: List[str]
    edges: List[Dict[str, str]]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: PipelineData):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Adjacency list to check if it's a DAG
    adj_list = {node: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        adj_list[edge['source']].append(edge['target'])

    def is_dag():
        visited = set()
        rec_stack = set()

        def has_cycle(v):
            if v in rec_stack:
                return True
            if v in visited:
                return False

            visited.add(v)
            rec_stack.add(v)
            for neighbor in adj_list[v]:
                if has_cycle(neighbor):
                    return True

            rec_stack.remove(v)
            return False

        return not any(has_cycle(node) for node in pipeline.nodes)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag()
    }
