import streamlit.components.v1 as components

_component_func = components.declare_component(
    "custom_slider",
    url="http://localhost:3001",
)

# Define a value argument in the wrapper function, pass it into `initialValue`
def st_custom_slider(label: str, min_value: int, max_value: int, value: int = 0, key=None):
    component_value = _component_func(label=label, minValue=min_value, maxValue=max_value, initialValue=value, key=key, default=value)
    return component_value
