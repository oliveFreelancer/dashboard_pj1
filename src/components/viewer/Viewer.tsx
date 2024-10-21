import React, { useState, useLayoutEffect } from "react";
import Image from "next/image";
import FacilityDetailPopup from "@/components/main/popup/FacilityDetailPopup";
import * as am5 from "@amcharts/amcharts5"; // am5 import
import * as am5map from "@amcharts/amcharts5/map"; // am5map import
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow"; // geodata import

const Viewer = () => {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    const zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {})
    );
    zoomControl.homeButton.set("visible", true);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow.default,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada),
    });

    const pointSeries = chart.series.push(
      am5map.ClusteredPointSeries.new(root, {})
    );
    pointSeries.set("clusteredBullet", function (root) {
      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    // Create regular bullets
    pointSeries.bullets.push(function () {
      const circle = am5.Circle.new(root, {
        radius: 6,
        tooltipY: 0,
        fill: am5.color(0xff8c00),
        tooltipText: "{title}",
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    // Set data
    const cities = [
      { title: "Vienna", latitude: 48.2092, longitude: 16.3728 },
      { title: "Minsk", latitude: 53.9678, longitude: 27.5766 },
      { title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
      { title: "Sarajevo", latitude: 43.8608, longitude: 18.4214 },
      { title: "Sofia", latitude: 42.7105, longitude: 23.3238 },
      { title: "Zagreb", latitude: 45.815, longitude: 15.9785 },
      { title: "Pristina", latitude: 42.666667, longitude: 21.166667 },
      { title: "Prague", latitude: 50.0878, longitude: 14.4205 },
      { title: "Copenhagen", latitude: 55.6763, longitude: 12.5681 },
      { title: "Tallinn", latitude: 59.4389, longitude: 24.7545 },
      { title: "Helsinki", latitude: 60.1699, longitude: 24.9384 },
      { title: "Paris", latitude: 48.8567, longitude: 2.351 },
      { title: "Berlin", latitude: 52.5235, longitude: 13.4115 },
      { title: "Athens", latitude: 37.9792, longitude: 23.7166 },
      { title: "Budapest", latitude: 47.4984, longitude: 19.0408 },
      { title: "Reykjavik", latitude: 64.1353, longitude: -21.8952 },
      { title: "Dublin", latitude: 53.3441, longitude: -6.2675 },
      { title: "Rome", latitude: 41.8955, longitude: 12.4823 },
      { title: "Riga", latitude: 56.9465, longitude: 24.1049 },
      { title: "Vaduz", latitude: 47.1411, longitude: 9.5215 },
      { title: "Vilnius", latitude: 54.6896, longitude: 25.2799 },
      { title: "Luxembourg", latitude: 49.61, longitude: 6.1296 },
      { title: "Skopje", latitude: 42.0024, longitude: 21.4361 },
      { title: "Valletta", latitude: 35.9042, longitude: 14.5189 },
      { title: "Chisinau", latitude: 47.0167, longitude: 28.8497 },
      { title: "Monaco", latitude: 43.7325, longitude: 7.4189 },
      { title: "Podgorica", latitude: 42.4602, longitude: 19.2595 },
      { title: "Amsterdam", latitude: 52.3738, longitude: 4.891 },
      { title: "Oslo", latitude: 59.9138, longitude: 10.7387 },
      { title: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
      { title: "Lisbon", latitude: 38.7072, longitude: -9.1355 },
      { title: "Bucharest", latitude: 44.4479, longitude: 26.0979 },
      { title: "Moscow", latitude: 55.7558, longitude: 37.6176 },
      { title: "San Marino", latitude: 43.9424, longitude: 12.4578 },
      { title: "Belgrade", latitude: 44.8048, longitude: 20.4781 },
      { title: "Bratislava", latitude: 48.2116, longitude: 17.1547 },
      { title: "Ljubljana", latitude: 46.0514, longitude: 14.506 },
      { title: "Madrid", latitude: 40.4167, longitude: -3.7033 },
      { title: "Stockholm", latitude: 59.3328, longitude: 18.0645 },
      { title: "Bern", latitude: 46.948, longitude: 7.4481 },
      { title: "Kiev", latitude: 50.4422, longitude: 30.5367 },
      { title: "London", latitude: 51.5002, longitude: -0.1262 },
      { title: "Gibraltar", latitude: 36.1377, longitude: -5.3453 },
      { title: "Saint Peter Port", latitude: 49.466, longitude: -2.5522 },
      { title: "Douglas", latitude: 54.167, longitude: -4.4821 },
      { title: "Saint Helier", latitude: 49.1919, longitude: -2.1071 },
      { title: "Longyearbyen", latitude: 78.2186, longitude: 15.6488 },
      { title: "Kabul", latitude: 34.5155, longitude: 69.1952 },
      { title: "Yerevan", latitude: 40.1596, longitude: 44.509 },
      { title: "Baku", latitude: 40.3834, longitude: 49.8932 },
      { title: "Manama", latitude: 26.1921, longitude: 50.5354 },
      { title: "Dhaka", latitude: 23.7106, longitude: 90.3978 },
      { title: "Thimphu", latitude: 27.4405, longitude: 89.673 },
      { title: "Bandar Seri Begawan", latitude: 4.9431, longitude: 114.9425 },
      { title: "Phnom Penh", latitude: 11.5434, longitude: 104.8984 },
      { title: "Peking", latitude: 39.9056, longitude: 116.3958 },
      { title: "Nicosia", latitude: 35.1676, longitude: 33.3736 },
      { title: "T'bilisi", latitude: 41.701, longitude: 44.793 },
      { title: "New Delhi", latitude: 28.6353, longitude: 77.225 },
      { title: "Jakarta", latitude: -6.1862, longitude: 106.8063 },
      { title: "Teheran", latitude: 35.7061, longitude: 51.4358 },
      { title: "Baghdad", latitude: 33.3157, longitude: 44.3922 },
      { title: "Jerusalem", latitude: 31.76, longitude: 35.17 },
      { title: "Tokyo", latitude: 35.6785, longitude: 139.6823 },
      { title: "Amman", latitude: 31.9394, longitude: 35.9349 },
      { title: "Astana", latitude: 51.1796, longitude: 71.4475 },
      { title: "Kuwait", latitude: 29.3721, longitude: 47.9824 },
      { title: "Bishkek", latitude: 42.8679, longitude: 74.5984 },
      { title: "Vientiane", latitude: 17.9689, longitude: 102.6137 },
      { title: "Beyrouth / Beirut", latitude: 33.8872, longitude: 35.5134 },
      { title: "Kuala Lumpur", latitude: 3.1502, longitude: 101.7077 },
      { title: "Ulan Bator", latitude: 47.9138, longitude: 106.922 },
      { title: "Pyinmana", latitude: 19.7378, longitude: 96.2083 },
      { title: "Kathmandu", latitude: 27.7058, longitude: 85.3157 },
      { title: "Muscat", latitude: 23.6086, longitude: 58.5922 },
      { title: "Islamabad", latitude: 33.6751, longitude: 73.0946 },
      { title: "Manila", latitude: 14.579, longitude: 120.9726 },
      { title: "Doha", latitude: 25.2948, longitude: 51.5082 },
      { title: "Riyadh", latitude: 24.6748, longitude: 46.6977 },
      { title: "Singapore", latitude: 1.2894, longitude: 103.85 },
      { title: "Seoul", latitude: 37.5139, longitude: 126.9828 },
      { title: "Colombo", latitude: 6.9155, longitude: 79.8572 },
      { title: "Damascus", latitude: 33.5158, longitude: 36.2939 },
      { title: "Taipei", latitude: 25.0338, longitude: 121.5645 },
      { title: "Dushanbe", latitude: 38.5737, longitude: 68.7738 },
      { title: "Bangkok", latitude: 13.7573, longitude: 100.502 },
      { title: "Dili", latitude: -8.5662, longitude: 125.588 },
      { title: "Ankara", latitude: 39.9439, longitude: 32.856 },
      { title: "Ashgabat", latitude: 37.9509, longitude: 58.3794 },
      { title: "Abu Dhabi", latitude: 24.4764, longitude: 54.3705 },
      { title: "Tashkent", latitude: 41.3193, longitude: 69.2481 },
      { title: "Hanoi", latitude: 21.0341, longitude: 105.8372 },
      { title: "Sanaa", latitude: 15.3556, longitude: 44.2081 },
      { title: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
      { title: "Bridgetown", latitude: 13.0935, longitude: -59.6105 },
      { title: "Belmopan", latitude: 17.2534, longitude: -88.7713 },
      { title: "Sucre", latitude: -19.0421, longitude: -65.2559 },
      { title: "Brasilia", latitude: -15.7801, longitude: -47.9292 },
      { title: "Ottawa", latitude: 45.4235, longitude: -75.6979 },
      { title: "Santiago", latitude: -33.4691, longitude: -70.642 },
      { title: "Bogota", latitude: 4.6473, longitude: -74.0962 },
      { title: "San Jose", latitude: 9.9402, longitude: -84.1002 },
      { title: "Havana", latitude: 23.1333, longitude: -82.3667 },
      { title: "Roseau", latitude: 15.2976, longitude: -61.39 },
      { title: "Santo Domingo", latitude: 18.479, longitude: -69.8908 },
      { title: "Quito", latitude: -0.2295, longitude: -78.5243 },
      { title: "San Salvador", latitude: 13.7034, longitude: -89.2073 },
      { title: "Guatemala", latitude: 14.6248, longitude: -90.5328 },
      { title: "Ciudad de Mexico", latitude: 19.4271, longitude: -99.1276 },
      { title: "Managua", latitude: 12.1475, longitude: -86.2734 },
      { title: "Panama", latitude: 8.9943, longitude: -79.5188 },
      { title: "Asuncion", latitude: -25.3005, longitude: -57.6362 },
      { title: "Lima", latitude: -12.0931, longitude: -77.0465 },
      { title: "Castries", latitude: 13.9972, longitude: -60.0018 },
      { title: "Paramaribo", latitude: 5.8232, longitude: -55.1679 },
      { title: "Washington D.C.", latitude: 38.8921, longitude: -77.0241 },
      { title: "Montevideo", latitude: -34.8941, longitude: -56.0675 },
      { title: "Caracas", latitude: 10.4961, longitude: -66.8983 },
      { title: "Oranjestad", latitude: 12.5246, longitude: -70.0265 },
      { title: "Cayenne", latitude: 4.9346, longitude: -52.3303 },
      { title: "Plymouth", latitude: 16.6802, longitude: -62.2014 },
      { title: "San Juan", latitude: 18.45, longitude: -66.0667 },
      { title: "Algiers", latitude: 36.7755, longitude: 3.0597 },
      { title: "Luanda", latitude: -8.8159, longitude: 13.2306 },
      { title: "Porto-Novo", latitude: 6.4779, longitude: 2.6323 },
    ];

    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      addCity(city.longitude, city.latitude, city.title);
    }

    function addCity(longitude: number, latitude: number, title: string) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
      });
    }

    chart.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <>
      <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
      <p
        style={{
          position: "absolute",
          top: "200px",
          left: "500px",
          color: "#fff",
        }}
      >
        <Image
          src="/assets/images/ic_view_marker.svg"
          alt="마커클릭"
          width={40}
          height={40}
          priority
          className="cursor-pointer drop-shadow-lg"
          onClick={() => setVisible(true)}
        />
      </p>
      <FacilityDetailPopup visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Viewer;
