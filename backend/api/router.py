from fastapi import APIRouter, HTTPException
import logging
import os
from typing import Dict
from helpers import csv_to_json

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

connected_users = {}

api_router = APIRouter(prefix="/api")

@api_router.get("/historicalData")
async def get_historical_data() -> Dict:
    logger.info("getting historical data...")

    csv_file_path = "../scraper/tables/adcc_historical_data.csv"

    if not os.path.exists(csv_file_path):
        logger.error(f"CSV file not found at path: {csv_file_path}")
        raise HTTPException(status_code=404, detail="CSV file not found")

    try:
        historical_data = csv_to_json(csv_file_path)
    except Exception as e:
        logger.error(f"Error processing CSV file: {e}")
        raise HTTPException(status_code=500, detail="Error processing CSV file")

    return historical_data

@api_router.get("/fighters")
async def get_fighters() -> Dict:
    logger.info("getting fighters...")

    csv_file_path = "../scraper/tables/main_list.csv"  

    if not os.path.exists(csv_file_path):
        logger.error(f"CSV file not found at path: {csv_file_path}")
        raise HTTPException(status_code=404, detail="CSV file not found")

    try:
        fighters_data = csv_to_json(csv_file_path)
    except Exception as e:
        logger.error(f"Error processing CSV file: {e}")
        raise HTTPException(status_code=500, detail="Error processing CSV file")

    return fighters_data

@api_router.get("/matches")
async def get_matches() -> Dict:
    logger.info("getting matches...")

    csv_file_path = "../scraper/tables/fighters_list.csv"

    if not os.path.exists(csv_file_path):
        logger.error(f"CSV file not found at path: {csv_file_path}")
        raise HTTPException(status_code=404, detail="CSV file not found")

    try:
        matches_data = csv_to_json(csv_file_path)
    except Exception as e:
        logger.error(f"Error processing CSV file: {e}")
        raise HTTPException(status_code=500, detail="Error processing CSV file")

    return matches_data
