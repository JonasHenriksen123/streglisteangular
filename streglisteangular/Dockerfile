FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
# Install NodeJs
RUN apt-get update && \
apt-get install -y wget && \
apt-get install -y gnupg2 && \
wget -qO- https://deb.nodesource.com/setup_16.x | bash - && \
apt-get install -y build-essential nodejs
# End Install
WORKDIR /src
COPY ["streglisteangular/streglisteangular.csproj", "streglisteangular/"]
RUN dotnet restore "streglisteangular/streglisteangular.csproj"
COPY . .
WORKDIR "/src/streglisteangular"
RUN dotnet build "streglisteangular.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "streglisteangular.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "streglisteangular.dll"]