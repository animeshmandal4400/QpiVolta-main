import streamlit as st
from streamlit_custom_slider import st_custom_slider

# Pass an initial value to the Streamlit native slider
v = st.slider("Hello world", 0, 100, 50)
st.write(v)

# Pass an initial value to your custom slider
v_custom = st_custom_slider('Hello world', 0, 100, 50, key="slider1")
st.write(v_custom)
