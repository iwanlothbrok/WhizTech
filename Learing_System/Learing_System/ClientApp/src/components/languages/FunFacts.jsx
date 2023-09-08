import React from 'react'

export default function FunFacts() {
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center mb-4">Забавни факти за C#</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <img
                  src="https://via.placeholder.com/150" // Replace with your image URL
                  className="card-img-top"
                  alt="C# Fun Fact"
                />
                <div className="card-body">
                  <h5 className="card-title">Езикът C#</h5>
                  <p className="card-text">
                    Е разработен от Microsoft и е международен ISO стандарт.
                  </p>
                </div>
              </div>
              <div className="card mb-4">
                <img
                  src="https://via.placeholder.com/150" // Replace with your image URL
                  className="card-img-top"
                  alt="C# Fun Fact"
                />
                <div className="card-body">
                  <h5 className="card-title">.NET и C#</h5>
                  <p className="card-text">
                    Са в топ 5 на най-търсените технологии в софтуерната индустрия в България.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <img
                  src="https://via.placeholder.com/150" // Replace with your image URL
                  className="card-img-top"
                  alt="C# Fun Fact"
                />
                <div className="card-body">
                  <h5 className="card-title">Отвореният код</h5>
                  <p className="card-text">
                    Е в основата на платформата .NET Core, която е публичен проект в GitHub.
                  </p>
                </div>
              </div>
              <div className="card mb-4">
                <img
                  src="https://via.placeholder.com/150" // Replace with your image URL
                  className="card-img-top"
                  alt="C# Fun Fact"
                />
                <div className="card-body">
                  <h5 className="card-title">.NET технологиите</h5>
                  <p className="card-text">
                    Се ползват за разработка на всякакъв вид приложен софтуер: уеб приложения, мобилни приложения, 3D графика, игри.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };