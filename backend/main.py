from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx

app = FastAPI()

# Allow requests from frontend (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Or ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {"Hello": "World"}   

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    graph = nx.DiGraph()

    for node in data.nodes:
        graph.add_node(node.id)

    for edge in data.edges:
        graph.add_edge(edge.source, edge.target)
    
    print(graph.nodes)
    print(graph.edges)  

    num_nodes = graph.number_of_nodes()
    num_edges = graph.number_of_edges()
    is_dag = nx.is_directed_acyclic_graph(graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
